const Order = require("../models/orderModel");
const base = require('./baseController');
exports.getAllOrders = base.getAll(Order);
exports.getOrder = base.getOne(Order);
exports.createOrder = base.createOne(Order);
exports.updateOrder = base.updateOne(Order);
exports.deleteOrder = base.deleteOne(Order);
