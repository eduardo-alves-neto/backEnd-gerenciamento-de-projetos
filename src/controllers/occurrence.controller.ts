import { NextFunction, Request, Response } from "express";
import {
  createOccurrence,
  getOccurrenceById,
  updateOccurrence,
  deleteOccurrence,
  getAllOccurrences,
} from "../services/occurrence.service";
import { asyncWrapper } from "../utils/asyncWrapper";

export const registerOccurrence = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const occurrenceData = req.body;
    const occurrence = await createOccurrence(occurrenceData);
    res.status(201).json(occurrence);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getOccurrence = asyncWrapper(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const occurrence = await getOccurrenceById(id);
    if (!occurrence) {
      return res.status(404).json({ message: "Occurrence not found" });
    }
    return res.status(200).json(occurrence);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

export const updateOccurrenceDetails = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const occurrenceData = req.body;
      const updatedOccurrence = await updateOccurrence(id, occurrenceData);
      if (!updatedOccurrence) {
        return res.status(404).json({ message: "Occurrence not found" });
      }
      return res.json(updatedOccurrence);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
);

export const deleteOccurrenceRecord = asyncWrapper(
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedOccurrence = await deleteOccurrence(id);
      if (!deletedOccurrence) {
        return res.status(404).json({ message: "Occurrence not found" });
      }
      res.json({ message: "Occurrence deleted successfully" });
      return;
    } catch (err: any) {
      res.status(400).json({ message: err.message });
      return;
    }
  }
);

export const listAllOccurrences = asyncWrapper(
  async (_req: Request, res: Response, _next: NextFunction) => {
    try {
      const occurrences = await getAllOccurrences();
      res.json(occurrences);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
);
