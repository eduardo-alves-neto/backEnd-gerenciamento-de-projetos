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
    description: {
      type: String,
      required: true,
    },
    occurrenceDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Occurrence = mongoose.model("Occurrence", OccurrenceSchema);
