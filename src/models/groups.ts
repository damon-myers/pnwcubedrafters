import { Address } from "./address";

export const ALL_GROUPS: string = "all-groups";

export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export interface GroupMetadata {
  id: string;
  image_url: string;
  image_alt: string;
  name: string;
  venue_name: string;
  venue_address: Address;
  frequency?: "Weekly" | "Monthly";
  days_of_week: DayOfWeek | DayOfWeek[];
  time: string;
  entry_fee: number | "Free";
}

export const groups: GroupMetadata[] = [
  {
    id: "gg_wednesday",
    image_url: "images/groups/guardian-games.webp",
    image_alt: "Guardian Games Portland Logo",
    name: "Guardian Games - Wednesday",
    days_of_week: "Wednesday",
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
    image_url: "images/groups/guardian-games.webp",
    image_alt: "Guardian Games Portland Logo",
    name: "Guardian Games - Weekend",
    days_of_week: ["Saturday", "Sunday"],
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
    image_url: "images/groups/wayward-city.jpg",
    image_alt: "Wayward City Games Logo",
    name: "Wayward City Games",
    days_of_week: "Monday",
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
  {
    id: "dapper",
    image_url: "images/groups/dapper-games.png",
    image_alt: "Dapper Games Logo",
    name: "Dapper Games",
    days_of_week: "Friday",
    time: "6:00PM",
    entry_fee: 5,
    venue_name: "Dapper Games",
    venue_address: {
      street: "1058 NW State Ave",
      city: "Chehalis",
      state: "WA",
      zip: "98532",
      lat: 46.67073843889854,
      lng: -122.97362294305759
    }
  },
  {
    id: "al_sports_bar",
    image_url: "images/groups/al_sports_bar.jpg",
    image_alt: "A&L Sports Pub Logo",
    name: "A&L Sports Bar",
    frequency: "Monthly",
    days_of_week: ["Friday", "Saturday"],
    time: "Varies",
    entry_fee: 0,
    venue_name: "A&L Sports Bar",
    venue_address: {
      street: "5933 NE Glisan St",
      city: "Portland",
      state: "OR",
      zip: "97213",
      lat: 45.52687853832296,
      lng: -122.60260561736582
    }
  }
];
