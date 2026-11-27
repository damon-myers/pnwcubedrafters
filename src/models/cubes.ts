import cubeData from '../data/cubes.json'
import { cubeIdForUrl } from './cubeIds'

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
  return `https://cubecobra.com/cube/overview/${cubeIdForUrl(cubeCobraId)}`;
}