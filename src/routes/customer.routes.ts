import { Router } from 'express';
import { deleteCustomerRecord, getCustomer, listAllCustomers, registerCustomer, updateCustomerDetails } from '../controllers/customer.controller';

const customerRouter = Router()

customerRouter.post('/customer', registerCustomer)
customerRouter.get('/customers/all',listAllCustomers)
customerRouter.get('/customer/:id', getCustomer);
customerRouter.put('/customer/:id', updateCustomerDetails);
customerRouter.delete('/customer/:id', deleteCustomerRecord);

export default customerRouter
