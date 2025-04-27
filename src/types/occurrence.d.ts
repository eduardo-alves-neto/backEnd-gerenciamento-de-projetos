import { Document } from "mongoose";

export interface IOccurrence extends Document {
  collaboratorId: mongoose.Types.ObjectId;
  collaboratorName: string;
  customerId: mongoose.Types.ObjectId;
  customerName: string;
  description: string;
  occurrenceDate: Date;
  details?: string;
  createdAt: Date;
  updatedAt: Date;
}
