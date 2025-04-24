import mongoose, { Schema } from "mongoose";
import { IImage } from "../../model/IImage";

/**
 * Schema for managing the { @link Image } collections in the database.
 */
const Image = new Schema<IImage>({

  albumId: {
    type: Schema.Types.ObjectId,
    ref: 'Album'
  },

  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  position: {
    type: Number,
    required: true,
  }

})

export default mongoose.model<IImage>('Image', Image);

