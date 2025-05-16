import LocationComponent from '@/components/LocationComponent';

import { groups } from '@/models/groups';

export default function LocationsPage() {
  return (
    <div>
      <h1 className='font-bold text-3xl mb-4'>Locations & Schedule</h1>
      <div className="flex flex-col">
        {groups.map((group, index) => (
          <LocationComponent key={index} group={group} />
        ))}
      </div>
    </div>
  );
}