import CubeCard from '@/components/CubeCard';
import GroupSelectionComponent from '@/components/GroupSelection';
import { groupCubes } from '@/models/groupCubes';
import { ALL_GROUPS } from '@/models/groups';
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from 'react';

import { cubes, getCubeById as cubesById } from '@/models/cubes';

const getCubesForGroup = (groupId: string) => {
  if (groupId === ALL_GROUPS) {
    return cubes;
  }

  const cubesInGroup = groupCubes[groupId].map(cubeId => cubesById[cubeId]);

  return cubesInGroup;
}

const getRandomWord = () => {
  const words = [
    "immaculate",
    "beautiful",
    "stunning",
    "incredible",
    "amazing",
    "spectacular",
    "breathtaking",
    "magnificent",
    "wonderful",
    "fantastic",
    "remarkable",
    "extraordinary",
    "exceptional",
    "marvelous",
    "astonishing",
    "astounding",
    "unbelievable",
    "phenomenal",
  ];
  return words[Math.floor(Math.random() * words.length)];
}

export default function CubeGallery() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedGroup = searchParams.get("group_id") || ALL_GROUPS;

  const handleSelectGroup = (groupId: string) => {
    const params = new URLSearchParams(searchParams);
    if (!groupId || groupId === ALL_GROUPS) {
      params.delete("group_id");
    } else {
      params.set("group_id", groupId);
    }
    router.replace(`?${params.toString()}`);
  };

  const selectedCubes = getCubesForGroup(selectedGroup);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GroupSelectionComponent
        selectedGroup={selectedGroup}
        onSelectGroup={handleSelectGroup}
      />
      <p className="text-lg mb-5">
        <b>{selectedCubes.length}</b> {getRandomWord()} {selectedCubes.length === 0 ? "cube" : "cubes"}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedCubes.map((cube) => (
          <CubeCard cube={cube} key={cube.cubeCobraId} />
        ))}
      </div>
    </Suspense>
  );
}