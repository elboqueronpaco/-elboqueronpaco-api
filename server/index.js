"use strict";

require("./config");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 4000;

_app["default"].listen(process.env.PORT);

console.log("server at http://localhost:".concat(process.env.PORT));