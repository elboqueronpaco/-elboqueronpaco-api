"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userRouter = (0, _express.Router)();
userRouter.get('/', function (req, res) {
  res.status(200).json({
    ok: true,
    data: 'usuarios'
  });
});
userRouter.get('/:id', function (req, res) {
  var id = req.params.id;
  res.json({
    ok: true,
    data: "usuario ".concat(id)
  });
});
userRouter.post('/', function (req, res) {
  var data = req.body;
  res.json({
    ok: true,
    data: data
  });
});
userRouter.put('/:id', function (req, res) {
  var id = req.params.id;
  res.json({
    ok: true,
    data: "actualizado usuario ".concat(id)
  });
});
userRouter["delete"]('/:id', function (req, res) {
  var id = req.params.id;
  res.json({
    ok: true,
    data: "Eliminar usuario ".concat(id)
  });
});
var _default = userRouter;
exports["default"] = _default;