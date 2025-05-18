"use client";
import { groups } from "@/models/groups";
import { groupCubes } from "@/models/groupCubes";
import { ALL_GROUPS } from "@/models/groups";

export default function GroupSelectionComponent({
  selectedGroup,
  onSelectGroup,
}: {
  selectedGroup: string;
  onSelectGroup: (groupId: string) => void;
}) {
  const selectedClasses = "border-blue-300 bg-[#323232]";
  const unselectedClasses = "border-[#242424]";
  const hoverClasses = "hover:border-blue-300 hover:bg-[#323232] hover:cursor-pointer";

  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex flex-wrap gap-2">
        <button
          className={`border-1 px-4 py-2 text-sm sm:text-base ${hoverClasses} ${selectedGroup === ALL_GROUPS
            ? selectedClasses
            : unselectedClasses
            }`}
          onClick={() => onSelectGroup(ALL_GROUPS)}
        >
          All
        </button>
        {groups.filter(group => groupCubes[group.id].length > 0).map((group) => (
          <button
            key={group.id}
            className={`border-1 border-[#242424] px-4 py-2 text-sm sm:text-base ${hoverClasses} ${selectedGroup === group.id
              ? selectedClasses
              : unselectedClasses
              }`}
            onClick={() => onSelectGroup(group.id)}
          >
            {group.name}
          </button>
        ))}
      </div>
      {/* Responsive: stack buttons vertically on very small screens */}
      <style jsx>{`
        @media (max-width: 480px) {
          .flex-wrap {
            flex-direction: column;
            flex-wrap: nowrap;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}