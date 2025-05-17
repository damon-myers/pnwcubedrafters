import cubeData from '../data/cubes.json'

export interface CubeMetadata {
  name: string;
  curator: string;
  cubeCobraId: string;
  format: string;
  cardCount: number;
  imageUrl: string;
  imageAlt: string;
}

export const cubes: CubeMetadata[] = cubeData

export const getCubeById = Object.fromEntries(
  cubes.map((cube) => [cube.cubeCobraId, cube])
);

export const getCubeUrl = (cubeCobraId: string) => {
  return `https://cubecobra.com/cube/overview/${cubeCobraId}`;
}