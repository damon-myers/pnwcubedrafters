import { Address } from "./address";

export interface GroupMetadata {
  id: string;
  image_url: string;
  image_alt: string;
  name: string;
  venue_name: string;
  venue_address: Address;
  day_of_week: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "Saturday/Sunday";
  time: string;
  entry_fee: number | "Free";
}

export const groups: GroupMetadata[] = [
  {
    id: "gg_wednesday",
    image_url: "/images/groups/guardian_games.webp",
    image_alt: "Guardian Games Portland Logo",
    name: "Wednesday @ Guardian Games",
    day_of_week: "Wednesday",
    time: "6:15PM",
    entry_fee: "Free",
    venue_name: "Guardian Games",
    venue_address: {
      street: "345 SE Taylor St",
      city: "Portland",
      state: "OR",
      zip: "97214",
      lat: 45.515354223938296,
      lng: -122.66214899579316
    },
  },
  {
    id: "gg_weekend",
    image_url: "/images/groups/guardian_games.webp",
    image_alt: "Guardian Games Portland Logo",
    name: "Weekend @ Guardian Games",
    day_of_week: "Saturday/Sunday",
    time: "2:00PM",
    entry_fee: "Free",
    venue_name: "Guardian Games",
    venue_address: {
      street: "345 SE Taylor St",
      city: "Portland",
      state: "OR",
      zip: "97214",
      lat: 45.515354223938296,
      lng: -122.66214899579316
    }
  },
  {
    id: "wayward",
    image_url: "/images/groups/wayward_city.jpg",
    image_alt: "Wayward City Games Logo",
    name: "Monday @ Wayward City Games",
    day_of_week: "Monday",
    time: "6:00PM",
    entry_fee: 10,
    venue_name: "Wayward City Games",
    venue_address: {
      street: "8050 E Mill Plain Blvd",
      city: "Vancouver",
      state: "WA",
      zip: "98664",
      lat: 45.62526151479038,
      lng: -122.58994285066382
    }
  },
];
