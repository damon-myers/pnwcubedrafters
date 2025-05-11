import { groups } from '@/models/groups';

export default function GroupsPage() {
  return (
    <div>
      <ul className="px-8">
        {groups.map((group, index) => (
          <li className="m-4" key={index}>
            <h2 className="text-xl font-bold">{group.name}</h2>
            <p className="ml-4 text-md"><b>Location</b> - {group.venue_name} ({group.venue_address.city}, {group.venue_address.state})</p>
            <p className="ml-4 text-md"><b>Entry</b> - {group.entry_fee == "Free" ? "Free" : `\$${group.entry_fee}`}</p>
            <p className="ml-4 text-md"><b>Schedule</b> - {group.day_of_week} at {group.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}