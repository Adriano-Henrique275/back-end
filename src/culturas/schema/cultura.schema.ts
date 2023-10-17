import * as mongoose from 'mongoose';

export const CulturasSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    tipo: { type: String, required: true },

    lote: { type: String, required: true },

    description: { type: String, required: true },

    datePlantio: { type: Date, required: true },
    
    dateColheita: { type: Date, required: true },

    status: { type: String, required: true },
  },
  { timestamps: true },
);

CulturasSchema.index({ name: 1 }, { unique: true });