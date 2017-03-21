'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _s = require('./s2');

var _s2 = _interopRequireDefault(_s);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var x = { value: 1, log: 2 };

value = x.value;


var page = document.getElementByTagName('body');

_reactDom2.default.render(_react2.default.createElement(_s2.default, null), page);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      var name = 'luke';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          ' ',
          name,
          ' '
        )
      );
    }
  }]);

  return Test;
}(_react2.default.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInMxLmpzIiwiczIuanMiXSwibmFtZXMiOlsieCIsInZhbHVlIiwibG9nIiwicGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5VGFnTmFtZSIsInJlbmRlciIsIlRlc3QiLCJuYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSSxFQUFDQyxPQUFPLENBQVIsRUFBV0MsS0FBSyxDQUFoQixFQUFSOztBQUVHRCxRQUFVRCxFQUFWQzs7O0FBRUgsSUFBSUUsT0FBT0MsU0FBU0MsbUJBQVQsQ0FBNkIsTUFBN0IsQ0FBWDs7QUFFQSxtQkFBU0MsTUFBVCxDQUNFLGdEQURGLEVBRUVILElBRkY7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7Ozs7SUFFcUJJOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLFVBQU1DLE9BQU8sTUFBYjs7QUFFQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQU1BLGNBQU47QUFBQTtBQUFBO0FBREYsT0FERjtBQUtEOzs7O0VBVCtCLGdCQUFNQzs7a0JBQW5CRiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFRlc3QgZnJvbSAnLi9zMic7XHJcblxyXG5sZXQgeCA9IHt2YWx1ZTogMSwgbG9nOiAyfTtcclxuXHJcbih7IHZhbHVlIH0gPSB4KTtcclxuXHJcbnZhciBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5VGFnTmFtZSgnYm9keScpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxUZXN0Lz5cclxuLCBwYWdlKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IG5hbWUgPSAnbHVrZSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+IHtuYW1lfSA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iXX0=
