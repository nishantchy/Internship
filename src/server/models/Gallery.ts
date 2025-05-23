import { Schema, model, models } from "mongoose";

const photoSchema = new Schema({
  public_id: { type: String, required: true },
  url: { type: String, required: true },
});
const Photo = models.Photo || model("Photo", photoSchema);

// Schema
const gallerySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photos: [
      {
        type: Schema.ObjectId,
        ref: Photo.modelName,
      },
    ],
  },
  { timestamps: true },
);

const Gallery = models.Gallery || model("Gallery", gallerySchema);

export { Gallery, Photo };
