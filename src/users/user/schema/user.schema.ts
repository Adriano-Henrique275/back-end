import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ra: { type: Number, requered: true },
    email: { type: String, requered: true },
    password: { type: String, requered: true },
  },
  { timestamps: true },
);

UserSchema.index({ ra: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });