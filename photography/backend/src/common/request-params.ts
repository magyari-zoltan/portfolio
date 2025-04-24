/**
 * Finds the param with the given name. If there is any obstacle to the filed
 * to be found, an exception will be thrown.
 *
 * @param params List of params in which to search for one with the give name.
 * @param paramName The name of the param to search for.
 * @returns the value of the parameter
 *
 * @throws No '${paramName}' param was provided.
* */
export function parseParam(params: any, paramName: string) {
  if (!(paramName in params) || !params[paramName]) {
    throw new Error(`No '${paramName}' param was provided.`);
  }

  const value = params[paramName];
  console.debug(`Param '${paramName}' parsed: ${value}`);

  return value
}
