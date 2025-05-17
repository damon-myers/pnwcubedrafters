// Pulls the art for a cube from CubeCobra and saves it to the public directory.

import fs from 'fs';
import path from 'path';

import { groupCubes } from '../models/groupCubes.ts';

const cubeIds = Object.values(groupCubes).flat();


const fetchCubeMetadata = async (cubeCobraId: string) => {
  const response = await fetch(`https://cubecobra.com/cube/api/cubejson/${cubeCobraId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch cube metadata: ${response.statusText}`);
  }
  return response.json();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const cubes = [];

  for (const cubeCobraId of cubeIds) {
    console.log(`Fetching metadata for cube: ${cubeCobraId}`);

    try {
      const cubeMetadata = await fetchCubeMetadata(cubeCobraId)
      console.log(`Fetched metadata for cube: ${cubeCobraId}`);

      const cubeCategoryOverride = cubeMetadata["categoryOverride"];
      const cubeCategoryPrefix = cubeMetadata["categoryPrefixes"]?.join(" ");

      const formatString = cubeCategoryPrefix ? `${cubeCategoryPrefix} ${cubeCategoryOverride}` : cubeCategoryOverride;

      const imageUri = cubeMetadata["image"]["uri"];

      // fetch the image from scryfall and save it to the public/cubes directory
      const imageResponse = await fetch(imageUri);
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch cube image: ${imageResponse.statusText}`);
      }
      const imageBuffer = await imageResponse.blob();
      const imageFileName = `${cubeCobraId}.png`;
      const imageFilePath = path.join(process.cwd(), 'public', 'images', 'cubes', imageFileName);
      fs.writeFileSync(imageFilePath, await imageBuffer.bytes());
      const imageAlt = `${cubeMetadata["image"]["imageName"]} by ${cubeMetadata["image"]["artist"]}`
      const imageUrl = `images/cubes/${imageFileName}`;

      cubes.push({
        cubeCobraId,
        name: cubeMetadata["name"],
        curator: cubeMetadata["owner"]["usernameLower"],
        format: formatString ? formatString : "Eternal",
        cardCount: cubeMetadata["cardCount"],
        imageUrl,
        imageAlt,
      })
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Failed to fetch cube metadata for cube: ${cubeCobraId}:`, error.message);
      } else {
        console.error(`Failed to fetch cube metadata for cube: ${cubeCobraId}:`, error);
      }
    }
  };

  console.log(`Fetched metadata for ${cubes.length} cubes`);
  const outputDir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputFile = path.join(outputDir, 'cubes.json');
  fs.writeFileSync(outputFile, JSON.stringify(cubes, null, 2));
  console.log(`Saved cube metadata to ${outputFile}`);
}