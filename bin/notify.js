"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.notify = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Toast = _interopRequireDefault(require("./components/Toast"));

var _Container = _interopRequireDefault(require("./components/Container"));

var _defaults = require("./defaults");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Render React component */
function renderToast(text, type, timeout, color, styleObject) {
  var target = document.getElementById(_defaults.defaults.wrapperId);

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
    text: text,
    timeout: timeout,
    type: type,
    color: color,
    styleObject: styleObject
  }), target);
}
/* Unmount React component */


function hide() {
  var target = document.getElementById(_defaults.defaults.wrapperId);

  _reactDom["default"].unmountComponentAtNode(target);
}
/**
 * Show Animated Toast Message
 * Returns true if the toast was shown, or false if show failed due to an existing notification
 *
 * @param  {String|Node} text    Text/Node to be displayed inside the toast.
 * @param  {Object}      options Display options for notification (See example below)
 *
 * [Options example]
 * {
 *   type:    {String} [success/error/info]
 *   timeout: {Int}    [timeout in ms]
 *   style:   {Object} [JS representation of CSS]
 * }
 */


function show(text, type, timeout, color, styleObject) {
  if (!document.getElementById(_defaults.defaults.wrapperId).hasChildNodes()) {
    // Use default timeout if not set.
    var renderTimeout = timeout || _defaults.defaults.timeout; // Render Component with Props.

    renderToast(text, type, renderTimeout, color, styleObject);

    if (renderTimeout === -1) {
      return false;
    } // Unmount react component after the animation finished.


    setTimeout(function () {
      hide();
    }, renderTimeout + _defaults.defaults.animationDuration);
    return true;
  }

  return false;
}
/**
 * Add to Animated Toast Message Queue
 * Display immediately if no queue
 * @param  {Number} initialRecallDelay   If the call to show fails because of an existing
 *                                       notification, how long to wait until we retry (ms)
 * @param  {Number} recallDelayIncrement Each time a successive call fails, the recall delay
 *                                       will be incremented by this (ms)
 * @return {[type]}                      [description]
 */


function createShowQueue() {
  var _this = this;

  var initialRecallDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var recallDelayIncrement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  // Array to hold queued messages
  this.msgs = []; // Is the showNotify function in progress - used so we can call showNotify when a
  // message is added to an empty queue.

  this.isNotifying = false;
  this.currentRecallDelay = initialRecallDelay; // Retrieve the next message from the queue and try to show it

  this.showNotify = function () {
    // If there are no messages in the queue
    if (_this.msgs.length === 0) {
      _this.isNotifying = false;
      return;
    }

    _this.isNotifying = true;

    var current = _this.msgs.pop(); // show will now return true if it is able to send the message,
    // or false if there is an existing message


    if (show(current.text, current.type, current.timeout, current.color, current.styleObject)) {
      _this.currentRecallDelay = initialRecallDelay;

      if (current.timeout > 0) {
        setTimeout(function () {
          return _this.showNotify();
        }, current.timeout + _defaults.defaults.animationDuration);
      }
    } else {
      // If message show failed, re-add the current message to the front of the queue
      _this.msgs.unshift(current);

      setTimeout(function () {
        return _this.showNotify();
      }, _this.currentRecallDelay);
      _this.currentRecallDelay += recallDelayIncrement;
    }
  };

  return function (text) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaults.defaults.timeout;
    var color = arguments.length > 3 ? arguments[3] : undefined;
    var styleObject = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    _this.msgs.push({
      text: text,
      type: type,
      timeout: timeout,
      color: color,
      styleObject: styleObject
    });

    if (!_this.isNotifying) {
      _this.showNotify();
    }
  };
}
/* Export notification functions */


var notify = {
  show: show,
  hide: hide,
  createShowQueue: createShowQueue
};
exports.notify = notify;
var _default = _Container["default"];
exports["default"] = _default;