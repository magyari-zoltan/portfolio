import { Types } from 'mongoose';

/**
 * Takes a string and converts it to a `Types.ObjectId`. If the conversion fails, an error is thrown.
 *
 * @param id that should be converted to `Types.ObjectID`.
 * @returns `Types.ObjectId`.
 * @throws Invalid object id '${id}'.
 */
export function toObjectID(id: string): Types.ObjectId {
  if (Types.ObjectId.isValid(id)) {
    return new Types.ObjectId(id);
  }
  throw new Error(`Invalid object id '${id}'`);
}

