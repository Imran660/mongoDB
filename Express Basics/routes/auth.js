const express = require('express');
const { carts } = require('../controller/auth');
const { checkUserMiddleware } = require('../middlewares/auth');

const Router = express.Router();

Router.get("/checkUser", checkUserMiddleware, carts)

module.exports=Router;