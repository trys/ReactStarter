(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Users = require('./components/Users');

var _Users2 = _interopRequireDefault(_Users);

var _NotFound = require('./components/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/users', component: _Users2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
);
_reactDom2.default.render(routes, document.getElementById('app'));

},{"./components/App":2,"./components/NotFound":3,"./components/Users":4,"react":"react","react-dom":"react-dom","react-router":"react-router"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: "App",

  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "app-wrapper" },
      _react2.default.createElement(
        "h1",
        null,
        "Yo"
      )
    );
  }
});

exports.default = App;

},{"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = _react2.default.createClass({
  displayName: "NotFound",

  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "app-wrapper" },
      _react2.default.createElement(
        "h1",
        null,
        "Nope"
      )
    );
  }
});

exports.default = NotFound;

},{"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = _react2.default.createClass({
  displayName: "Users",

  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "app-wrapper" },
      _react2.default.createElement(
        "h1",
        null,
        "Users"
      )
    );
  }
});

exports.default = Users;

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvTm90Rm91bmQuanMiLCJhcHAvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxTQUNBO0FBQUE7QUFBQSxNQUFRLG9DQUFSO0FBQ0ksd0RBQU8sTUFBSyxHQUFaLEVBQWdCLHdCQUFoQixHQURKO0FBRUksd0RBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQUZKO0FBR0ksd0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUhKLENBREo7QUFPQSxtQkFBUyxNQUFULENBQWlCLE1BQWpCLEVBQXlCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUF6Qjs7Ozs7Ozs7O0FDaEJBOzs7Ozs7QUFFQSxJQUFJLE1BQU0sZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUMxQixVQUFRLGtCQUFXO0FBQ2pCLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBREY7QUFLRDtBQVB5QixDQUFsQixDQUFWOztrQkFVZSxHOzs7Ozs7Ozs7QUNaZjs7Ozs7O0FBRUEsSUFBSSxXQUFXLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDL0IsVUFBUSxrQkFBVztBQUNqQixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixLQURGO0FBS0Q7QUFQOEIsQ0FBbEIsQ0FBZjs7a0JBVWUsUTs7Ozs7Ozs7O0FDWmY7Ozs7OztBQUVBLElBQUksUUFBUSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQzVCLFVBQVEsa0JBQVc7QUFDakIsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FERjtBQUtEO0FBUDJCLENBQWxCLENBQVo7O2tCQVVlLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJzJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG52YXIgcm91dGVzID0gKFxuICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgIDwvUm91dGVyPlxuKVxuUmVhY3RET00ucmVuZGVyKCByb3V0ZXMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSApOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXdyYXBwZXJcIj5cbiAgICAgICAgPGgxPllvPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIE5vdEZvdW5kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC13cmFwcGVyXCI+XG4gICAgICAgIDxoMT5Ob3BlPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgVXNlcnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXdyYXBwZXJcIj5cbiAgICAgICAgPGgxPlVzZXJzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXX0=
