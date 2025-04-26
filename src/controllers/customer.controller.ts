import { NextFunction, Request, Response } from "express";
import {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers,
} from "../services/customer.service";
import { asyncWrapper } from "../utils/asyncWrapper";

export const registerCustomer = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const customerData = req.body;
    const customer = await createCustomer(customerData);
    res.status(201).json(customer);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getCustomer = asyncWrapper(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const customer = await getCustomerById(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    return res.status(200).json(customer);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

export const updateCustomerDetails = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const customerData = req.body;
      const updatedCustomer = await updateCustomer(id, customerData);
      if (!updatedCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      return res.json(updatedCustomer);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
);

export const deleteCustomerRecord = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedCustomer = await deleteCustomer(id);
      if (!deletedCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.json({ message: "Customer deleted successfully" });
      return;
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
  }
);

export const listAllCustomers = asyncWrapper(
  async (_req: Request, res: Response, _next: NextFunction) => {
    try {
      const customers = await getAllCustomers();
      res.json(customers);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
);
