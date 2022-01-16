const express = require('express');
const router = express.Router();
const{ChecklogIn,Sign_Up ,Get_orders,View_orders} = require('../controllers/controller');
const {TOV} = require("../middleware/TokenVerify")
router.route('/order').get(View_orders).post(TOV).post(Get_orders);
router.route('/LogIn').post(ChecklogIn)
router.route('/SignUp').post(Sign_Up)

module.exports = router;