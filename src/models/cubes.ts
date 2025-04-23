enum CubeFormat {
  powered = "Powered Vintage",
  vintage = "Vintage",
  legacy = "Legacy",
  eternal = "Eternal",
  modern = "Modern",
  pauper = "Pauper",
  commander = "Commander",
  clownshoes = "Clownshoes",
  themed = "Themed",
  custom = "Custom",
  set = "Set",
  desert = "Desert",
}

interface CubeMetadata {
  name: string;
  curator: string;
  cubeCobraId: string;
  format: CubeFormat
}

export const cubes: CubeMetadata[] = [
  {
    name: "Cinnamon",
    curator: "hotmatcha",
    cubeCobraId: "cinnamon",
    format: CubeFormat.eternal,
  },
  {
    name: "Tomato Soup",
    curator: "hotmatcha",
    cubeCobraId: "tomato",
    format: CubeFormat.modern,
  },
  {
    name: "No Limit Vintage",
    curator: "Joking101",
    cubeCobraId: "NoLimitVintage",
    format: CubeFormat.powered,
  },
  {
    name: "Hyphen's Cube",
    curator: "Hyphenated",
    cubeCobraId: "butts",
    format: CubeFormat.powered,
  },
  {
    name: "PNWednesday Cube",
    curator: "mxnoqwerty",
    cubeCobraId: "pnw-wednesday",
    format: CubeFormat.eternal,
  },
  {
    name: "milo's synergy cube",
    curator: "insectoid",
    cubeCobraId: "MISYQ",
    format: CubeFormat.eternal,
  },
  {
    name: "Pro Tour Cube (2018)",
    curator: "Slayerbfm",
    cubeCobraId: "21sik",
    format: CubeFormat.eternal,
  },
  {
    name: '"Cubey" the Eternal Cube',
    curator: "Datahack",
    cubeCobraId: "cubey",
    format: CubeFormat.vintage,
  },
  {
    name: "Enchanted Evening",
    curator: "rorystraubel",
    cubeCobraId: "enchanted-evening",
    format: CubeFormat.themed
  },
  {
    name: "Lorwyn/Morningtide Set Cube",
    curator: "Datahack",
    cubeCobraId: "kwu",
    format: CubeFormat.set,
  },
  {
    name: "Shadowmoor/Eventide Set Cube",
    curator: "Datahack",
    cubeCobraId: "shadow",
    format: CubeFormat.set,
  },
  {
    name: "Another 100 Ornithopters",
    curator: "Datahack",
    cubeCobraId: "2x100",
    format: CubeFormat.themed,
  },
  {
    name: "The Blizzard Cube",
    curator: "Datahack",
    cubeCobraId: "Blizzard",
    format: CubeFormat.desert,
  },
  {
    name: "Rude Boy Combo Cube",
    curator: "Juliomacielbr",
    cubeCobraId: "45f799a8-a70f-44e1-8dc1-0bf568a134e1",
    format: CubeFormat.themed,
  },
  {
    name: "Nostalgia Remastered - 450",
    curator: "gchant",
    cubeCobraId: "121af6e7-e221-4279-8926-949f8f09b92a",
    format: CubeFormat.powered,
  },
  {
    name: "5c Magix",
    curator: "dizane",
    cubeCobraId: "5cmagix",
    format: CubeFormat.powered,
  },
  {
    name: "Gems in the Rough",
    curator: "Datahack",
    cubeCobraId: "Gems",
    format: CubeFormat.pauper,
  },
  {
    name: "Zurishimi's Cube",
    curator: "zurishimi",
    cubeCobraId: "33cbdee8-e022-4620-affb-035b379b9a7a",
    format: CubeFormat.legacy,
  }
];

export const cubeById = Object.fromEntries(
  cubes.map((cube) => [cube.cubeCobraId, cube])
);

export const getCubeUrl = (cubeCobraId: string) => {
  return `https://cubecobra.com/cube/overview/${cubeCobraId}`;
}