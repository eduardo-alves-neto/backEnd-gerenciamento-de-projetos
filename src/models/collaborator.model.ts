import mongoose from 'mongoose';

const collaboratorSchema = new mongoose.Schema({
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

export const Collaborator = mongoose.model('Collaborator', collaboratorSchema);
