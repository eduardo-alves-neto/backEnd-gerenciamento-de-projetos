import { IOccurrence } from "../types/occurrence";
import { Occurrence } from "../models/occurrence.model";

export const createOccurrence = async (data: Partial<IOccurrence>) => {
  try {
    const occurrence = new Occurrence(data);
    return await occurrence.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getOccurrenceById = async (id: string) => {
  try {
    return await Occurrence.findById(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateOccurrence = async (id: string, data: Partial<IOccurrence>) => {
  try {
    return await Occurrence.findByIdAndUpdate(id, data, { new: true });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteOccurrence = async (id: string) => {
  try {
    return await Occurrence.findByIdAndDelete(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllOccurrences = async () => {
  try {
    return await Occurrence.find();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
