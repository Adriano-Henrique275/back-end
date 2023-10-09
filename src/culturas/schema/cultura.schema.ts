import * as mongoose from 'mongoose';

export const CulturaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cotegory: { type: String, requered: true },
  },
  { timestamps: true },
);

CulturaSchema.index({ cotegory: 1 }, { unique: true });