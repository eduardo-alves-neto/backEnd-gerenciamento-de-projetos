import { Document } from "mongoose";

export interface IOccurrence extends Document {
  collaboratorId: mongoose.Types.ObjectId;
  customerId: mongoose.Types.ObjectId;
  description: string;
  occurrenceDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
