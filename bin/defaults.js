"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeOptions = mergeOptions;
exports.defaults = void 0;

var _objectAssign = _interopRequireDefault(require("object-assign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaults = {
  wrapperId: 'notification-wrapper',
  animationDuration: 300,
  timeout: 5000,
  zIndex: 1000,
  top: 0,
  // Controls the offset from top of viewport.
  colors: {
    error: {
      color: "#FFFFFF",
      backgroundColor: '#E85742'
    },
    success: {
      color: "#FFFFFF",
      backgroundColor: '#55CA92'
    },
    warning: {
      color: "#333333",
      backgroundColor: '#F5E273'
    },
    info: {
      color: "#FFFFFF",
      backgroundColor: '#4990E2'
    }
  }
};
exports.defaults = defaults;

function mergeOptions(options) {
  exports.defaults = defaults = (0, _objectAssign["default"])(defaults, options);
}