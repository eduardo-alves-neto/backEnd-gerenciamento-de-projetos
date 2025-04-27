import mongoose, { Schema } from "mongoose";
import { IOccurrence } from "types/occurrence";

const OccurrenceSchema = new Schema<IOccurrence>(
  {
    collaboratorId: {
      type: mongoose.Types.ObjectId,
      ref: "Collaborator",
      required: true,
    },
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    collaboratorName: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    occurrenceDate: {
      type: Date,
      required: true,
    },
    details: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Occurrence = mongoose.model("Occurrence", OccurrenceSchema);
