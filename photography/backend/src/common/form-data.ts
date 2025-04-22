import { Fields, Files, File } from 'formidable';

/**
 * A field in formidable.Fields
 */
export type Field = {
  [fieldName: string]: any
}

/**
 * Finds the field with the given name. If there is any obstacle to the filed
 * to be found, an exception will be thrown.
 *
 * @param fields List of fileds in which to search for one with the give name.
 * @param fieldName The name of the field to search for.
 *
 * @returns 
 * ```typescript
 * type Field = {
 *   [fieldName: string]: any
 * }
 * ```
 *
 * @throws Missing ${fieldName} field.
 */
export function parseField(fields: Fields, fieldName: string): Field {
  if (!(fieldName in fields) || !fields[fieldName]) {
    console.debug(`Parsing fields ${fields} failed`);
    throw new Error(`Missing ${fieldName} field.`)
  }

  const value = fields[fieldName][0];
  console.debug(`Field '${fieldName}' parsed: ${value}`);

  return { [fieldName]: value }
}

/*
 * Image file in formidable.Files
 */
export type Image = {
  image: File;
}

/**
 * Retrieves the first image from the files input parameter. If there is any 
 * obstacle to be retrieved, an exception will be thrown.
 *
 * @param files The list of files to retrieve the image from.
 *
 * @returns
 * ```typescript
 * type Image = {
 *   image: formidable.File;
 * }
 * ```
 *
 * @throws Missing images field.
 * @throws No image was sent.
 * @throws More than one image was sent.
 */
export function parseSingleImage(files: Files): Image {
  if (!files || !('images' in files)) {
    console.debug(`Parsing files ${files} failed.`);
    throw new Error(`Missing images field.`)
  }

  const images = files.images;
  if (!images || !images.length || !images[0]) {
    console.debug(`No image: ${images}.`);
    throw new Error(`No image was sent.`)
  }

  if (images.length > 1) {
    console.debug(`More than one image: ${images}.`);
    throw new Error(`More than one image was sent.`)
  }

  console.debug(`Single image parsed: ${images[0]}`);
  return { image: images[0] };
}
