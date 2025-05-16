import { cubes, getCubeUrl } from '@/models/cubes';

export default function CubesPage() {
  return (
    <div>
      <h1 className='font-bold text-3xl mb-4'>Cubes</h1>
      <ul>
        {cubes.map((cube, index) => (
          <li className="p-2" key={index}>
            <h2>{cube.name}</h2>
            <p>Designed by {cube.curator}</p>
            <a href={getCubeUrl(cube.cubeCobraId)}>Cube Overview</a>
          </li>
        ))}
      </ul>
    </div>
  );
}