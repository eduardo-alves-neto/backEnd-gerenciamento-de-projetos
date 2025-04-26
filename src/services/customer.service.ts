import { ICustomer } from "../types/customers";
import { Customer } from "../models/customer.model";

export const createCustomer = async (data: Partial<ICustomer>) => {
  try {
    const customer = new Customer(data);
    return await customer.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCustomerById = async (id: string) => {
  try {
    return await Customer.findById(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateCustomer = async (id: string, data: Partial<ICustomer>) => {
  try {
    return await Customer.findByIdAndUpdate(id, data, { new: true });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteCustomer = async (id: string) => {
  try {
    return await Customer.findByIdAndDelete(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllCustomers = async () => {
  try {
    return await Customer.find();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
