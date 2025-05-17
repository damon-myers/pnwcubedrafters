import { CubeMetadata, getCubeUrl } from "@/models/cubes";
import Link from "next/link";

type CubeCardProps = {
  cube: CubeMetadata;
};

export default function CubeCard({ cube }: CubeCardProps) {
  return (
    <Link
      className="relative flex flex-col justify-end bg-[#323232] border-2 border-[#323232] hover:border-blue-300 h-60 w-80 overflow-hidden"
      href={getCubeUrl(cube.cubeCobraId)}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundImage: `url(${cube.imageUrl})`,
        backgroundClip: "padding-box",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-7/8 z-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
        }}
      />
      <div className="relative z-10 p-4">
        <h2 className="text-lg font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">{cube.name}</h2>
        <p className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">{cube.cardCount} card {cube.format.toLowerCase()} cube</p>
        <p className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Designed by {cube.curator}</p>
      </div>
    </Link>
  );
}