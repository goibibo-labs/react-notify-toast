"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defaults = require("./defaults");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This was created as an ES6 class with a getter for the styles to allow for recomputing
 * dynamic values on each usage without calling a function.
 */
var Stylesheet = /*#__PURE__*/function () {
  function Stylesheet() {
    _classCallCheck(this, Stylesheet);
  }

  _createClass(Stylesheet, [{
    key: "styles",
    get: function get() {
      return {
        container: {
          position: 'fixed',
          width: '50%',
          margin: '0 auto',
          right: '0px',
          top: _defaults.defaults.top,
          left: '0px',
          textAlign: 'center',
          zIndex: _defaults.defaults.zIndex,
          pointerEvents: 'none',
          transition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
          transform: 'translateY(-100%)',
          // Vendor Prefixes
          msTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
          msTransform: 'translateY(-100%)',
          WebkitTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
          WebkitTransform: 'translateY(-100%)',
          OTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
          OTransform: 'translateY(-100%)',
          MozTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
          MozTransform: 'translateY(-100%)'
        },
        content: {
          cursor: 'pointer',
          display: 'inline-block',
          width: 'auto',
          borderRadius: '0 0 4px 4px',
          backgroundColor: 'white',
          padding: '10px 30px',
          pointerEvents: 'all'
        },
        show: {
          transform: 'translateY(0)',
          msTransform: 'translateY(0)',
          WebkitTransform: 'translateY(0)',
          OTransform: 'translateY(0)',
          MozTransform: 'translateY(0)'
        },
        hide: {
          transform: 'translateY(-100%)',
          msTransform: 'translateY(-100%)',
          WebkitTransform: 'translateY(-100%)',
          OTransform: 'translateY(-100%)',
          MozTransform: 'translateY(-100%)'
        }
      };
    }
  }]);

  return Stylesheet;
}();

var _default = new Stylesheet();

exports["default"] = _default;