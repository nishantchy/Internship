import { Schema, models, model } from "mongoose";

const memberSchema = new Schema(
  {
    province: {
      type: String,
      required: true,
    },
    image: {
      public_id: { type: String, required: true },
      secure_url: { type: String, required: true },
    },
    isChairman: { type: Boolean, default: false },
    position: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true },
);

const ProvinceMember =
  models.ProvinceMember || model("ProvinceMember", memberSchema);

export default ProvinceMember;
