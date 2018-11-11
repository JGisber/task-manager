const express = require('express');
const router = express.Router();
const control = require('../controllers/userControll');
const {validateParam, schema} = require('../helpers/routesHelper') 


router.route('/')
  .get(control.FETCH_users)
  .post(control.CREATE_user)


router.route('/:userId')
  .get(validateParam(schema.IdSchema, 'userId'), control.FETCH_userById)
  .put(control.UPDATE_userById)
  .patch(control.REPLACE_userByID)
  .delete(control.ERASE_userById)


router.route('/:userId/customers')
  .get(control.FETCH_userCustomers)
  .post(control.CREATE_userCustomer)



module.exports = router;
