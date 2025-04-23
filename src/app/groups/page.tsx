import { groups } from '@/models/groups';

export default function GroupsPage() {
  return (
    <div>
      <h1>Cubes</h1>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            <h2>{group.name}</h2>
            <p><b>Location:</b> {group.venue_name}</p>
            <p><b>Entry:</b> ${group.entry_fee}</p>
            <p><b>Schedule:</b> {group.day_of_week} at {group.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}