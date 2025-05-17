import LocationComponent from '@/components/LocationComponent';

import { groups } from '@/models/groups';

const uniqueCities = Array.from(
  new Set(
    groups
      .map(group => `${group.venue_address.city}, ${group.venue_address.state}`)
  )
);

const getUniqueCitiesConcatenated = (cities: string[]) => {
  if (cities.length === 1) {
    return cities[0];
  } else if (cities.length === 2) {
    return cities.join(' and ');
  } else {
    return cities.slice(0, -1).join(', ') + ', and ' + cities[cities.length - 1];
  }
}

const uniqueCitiesString = getUniqueCitiesConcatenated(uniqueCities);

export default function LocationsPage() {
  return (
    <div>
      <h1 className='font-bold text-3xl mb-4'>Locations & Schedule</h1>
      <p className="text-lg mb-4">
        Our community has cubers meeting up in {uniqueCitiesString}.
      </p>
      <p className="text-lg mb-4">
        No matter the location, everyone is welcome.
      </p>
      <div className="flex flex-col">
        {groups.map((group, index) => (
          <LocationComponent key={index} group={group} />
        ))}
      </div>
    </div >
  );
}