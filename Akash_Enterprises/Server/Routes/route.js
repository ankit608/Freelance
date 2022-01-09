const express = require('express');
const router = express.Router();

const{ChecklogIn,Sign_Up ,Get_orders,Recieve_order, Recieve_orders} = require('../controllers/controller');

router.route('/order').get(Get_orders).post(Recieve_orders);
router.route('/LogIn').post(ChecklogIn)
router.route('/SignUp').post(Sign_Up)

module.exports = router;