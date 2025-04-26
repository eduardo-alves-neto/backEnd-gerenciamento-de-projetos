import { Router } from "express";
import {
  deleteCollaboratorRecord,
  getCollaborator,
  listAllCollaborators,
  registerCollaborator,
  updateCollaboratorDetails,
} from "../controllers/collaborator.controller";

const collaboratorRouter = Router();

collaboratorRouter.post("/collaborator", registerCollaborator);
collaboratorRouter.get("/collaborators/all", listAllCollaborators);
collaboratorRouter.get("/collaborator/:id", getCollaborator);
collaboratorRouter.put("/collaborator/:id", updateCollaboratorDetails);
collaboratorRouter.delete("/collaborator/:id", deleteCollaboratorRecord);

export default collaboratorRouter;
