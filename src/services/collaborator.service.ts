import { ICollaborator } from "../types/collaborators";
import { Collaborator } from "../models/collaborator.model";

export const createCollaborator = async (data: Partial<ICollaborator>) => {
  try {
    const collaborator = new Collaborator(data);
    return await collaborator.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCollaboratorById = async (id: string) => {
  try {
    return await Collaborator.findById(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateCollaborator = async (id: string, data: Partial<ICollaborator>) => {
  try {
    return await Collaborator.findByIdAndUpdate(id, data, { new: true });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteCollaborator = async (id: string) => {
  try {
    return await Collaborator.findByIdAndDelete(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllCollaborators = async () => {
  try {
    return await Collaborator.find();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
