export interface CubeMetadata {
  name: string;
  curator: string;
  cubeCobraId: string;
  format: string;
  image_url: string;
  image_alt: string;
}

const cubes: CubeMetadata[] = [
  {
    "cubeCobraId": "cinnamon",
    "name": "Cinnamon",
    "curator": "hotmatcha",
    "format": "Eternal",
    "image_url": "images/cubes/cinnamon.png",
    "image_alt": "whims of the fates [bng-115] by Seb McKinnon"
  },
  {
    "cubeCobraId": "tomatosoup",
    "name": "Tomato Soup Cube",
    "curator": "hotmatcha",
    "format": "Unpowered Modern",
    "image_url": "images/cubes/tomatosoup.png",
    "image_alt": "huntmaster of the fells [dka-140] by Chris Rahn"
  },
  {
    "cubeCobraId": "MISYQ",
    "name": "milo's synergy cube",
    "curator": "insectoid",
    "format": "Eternal",
    "image_url": "images/cubes/MISYQ.png",
    "image_alt": "arcbound ravager [dst-100] by Carl Critchlow"
  },
  {
    "cubeCobraId": "21sik",
    "name": "Pro Tour Cube (2018)",
    "curator": "slayerbfm",
    "format": "Eternal",
    "image_url": "images/cubes/21sik.png",
    "image_alt": "baneslayer angel [m10-4] by Greg Staples"
  },
  {
    "cubeCobraId": "NoLimitVintage",
    "name": "No Limit Vintage",
    "curator": "joking101",
    "format": "Powered Vintage",
    "image_url": "images/cubes/NoLimitVintage.png",
    "image_alt": "contract from below [leb-97] by Douglas Shuler"
  },
  {
    "cubeCobraId": "butts",
    "name": "Hyphen's Cube",
    "curator": "hyphenated",
    "format": "Vintage",
    "image_url": "images/cubes/butts.png",
    "image_alt": "mana vault [4ed-334] by Mark Tedin"
  }
]

export const cubeById = Object.fromEntries(
  cubes.map((cube) => [cube.cubeCobraId, cube])
);

export const getCubeUrl = (cubeCobraId: string) => {
  return `https://cubecobra.com/cube/overview/${cubeCobraId}`;
}