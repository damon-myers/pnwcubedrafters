"use client";
import CubeGallery from "@/components/CubeGallery";
import { Suspense } from "react";

export default function CubesPage() {
  return (
    <div>
      <h1 className='font-bold text-3xl mb-4'>Cubes</h1>
      <Suspense fallback={<div className="text-lg">Loading...</div>}>
        <CubeGallery />
      </Suspense>
    </div>
  );
}