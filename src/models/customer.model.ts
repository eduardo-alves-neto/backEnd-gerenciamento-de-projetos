import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 email: {
  type: String,
  required: true,
  unique: true,
  trim: true,
  lowercase: true
 },
 phone: {
  type: String,
  required: true
 },
 address: {
  street: String,
  number: String,
  complement: String,
  neighborhood: String,
  city: String,
  state: String,
  zipCode: String
 
 },
 cpf: {
  type: String,
  required: true,
  unique: true
 },
 birthDate: Date,
 notes: String,
 active: {
  type: Boolean,
  default: true
 }
}, {
 timestamps: true
});

export const Customer = mongoose.model('Customer', customerSchema);
