// Cube Cobra IDs can be custom names containing spaces, apostrophes and other
// characters that aren't safe in URLs or file names. They may also be written
// already URL-encoded (e.g. "Juice's%20juicy%20juice%20box"). These helpers
// normalize an ID to its raw form and then make it safe for one context.

const decodeCubeId = (cubeCobraId: string) => {
  try {
    return decodeURIComponent(cubeCobraId);
  } catch {
    // Not valid percent-encoding, so treat it as already raw.
    return cubeCobraId;
  }
};

// The ID encoded for use as a single path segment in a Cube Cobra URL.
export const cubeIdForUrl = (cubeCobraId: string) =>
  encodeURIComponent(decodeCubeId(cubeCobraId));

// The ID reduced to characters that are safe in a file name and in a URL path.
export const cubeIdForFileName = (cubeCobraId: string) =>
  decodeCubeId(cubeCobraId).replace(/[^A-Za-z0-9_-]/g, "_");
