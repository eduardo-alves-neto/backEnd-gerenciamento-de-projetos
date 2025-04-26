import { NextFunction, Request, Response } from "express";
import {
  createCollaborator,
  getCollaboratorById,
  updateCollaborator,
  deleteCollaborator,
  getAllCollaborators,
} from "../services/collaborator.service";
import { asyncWrapper } from "../utils/asyncWrapper";

export const registerCollaborator = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const collaboratorData = req.body;
    const collaborator = await createCollaborator(collaboratorData);
    res.status(201).json(collaborator);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getCollaborator = asyncWrapper(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const collaborator = await getCollaboratorById(id);
    if (!collaborator) {
      return res.status(404).json({ message: "Collaborator not found" });
    }
    return res.status(200).json(collaborator);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

export const updateCollaboratorDetails = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const collaboratorData = req.body;
      const updatedCollaborator = await updateCollaborator(id, collaboratorData);
      if (!updatedCollaborator) {
        return res.status(404).json({ message: "Collaborator not found" });
      }
      return res.json(updatedCollaborator);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
);

export const deleteCollaboratorRecord = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedCollaborator = await deleteCollaborator(id);
      if (!deletedCollaborator) {
        return res.status(404).json({ message: "Collaborator not found" });
      }
      res.json({ message: "Collaborator deleted successfully" });
      return;
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
  }
);

export const listAllCollaborators = asyncWrapper(
  async (_req: Request, res: Response, _next: NextFunction) => {
    try {
      const collaborators = await getAllCollaborators();
      res.json(collaborators);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
);
