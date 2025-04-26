import { Router } from "express";
import {
  deleteOccurrenceRecord,
  getOccurrence,
  listAllOccurrences,
  registerOccurrence,
  updateOccurrenceDetails,
} from "../controllers/occurrence.controller";

const occurrenceRouter = Router();

occurrenceRouter.post("/occurrence", registerOccurrence);
occurrenceRouter.get("/occurrences/all", listAllOccurrences);
occurrenceRouter.get("/occurrence/:id", getOccurrence);
occurrenceRouter.put("/occurrence/:id", updateOccurrenceDetails);
occurrenceRouter.delete("/occurrence/:id", deleteOccurrenceRecord);

export default occurrenceRouter;
