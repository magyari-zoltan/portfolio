import mongoose, { Schema } from "mongoose";
import { IAlbum } from "../../model/IAlbum";

/**
 * Schema for managing the { @link Album } collections in the database.
 */
const Album = new Schema<IAlbum>({

  coverImageId: {
    type: Schema.Types.ObjectId,
    ref: 'Image'
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
    unique: true
  }

})

export default mongoose.model<IAlbum>('Album', Album);
