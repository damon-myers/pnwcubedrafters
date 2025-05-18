"use client";
import Image from "next/image";
import { GroupMetadata } from "@/models/groups";

import { CubeIcon, MapPinIcon, CurrencyDollarIcon, ClockIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { groupCubes } from "@/models/groupCubes";

type LocationProps = {
  group: GroupMetadata;
};

export default function Location({ group }: LocationProps) {
  return (
    <div className="my-4 key={index} bg-[#323232] p-4 items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="m-4 flex-shrink-0 flex items-center justify-center">
          <Image src={group.image_url} alt={group.image_alt} width={200} height={200} />
        </div>
        <div className="mx-4 flex-grow">
          <ul className="list-none py-2">
            <li>
              <div className="flex items-center text-lg p-2">
                <ClockIcon size={28} className="mr-2" />
                <span><b>{group.day_of_week}</b> at <b>{group.time}</b></span>
              </div>
              <div className="flex items-center text-lg p-2">
                <Link
                  className="inline-flex items-center hover:underline hover:text-blue-300"
                  href={`https://www.google.com/maps/search/?api=1&query=${group.venue_address.street},${group.venue_address.city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPinIcon size={28} className="mr-2" />
                  <div>
                    <p>{group.venue_name}</p>
                    <span>{group.venue_address.street}, {group.venue_address.city}, {group.venue_address.state}</span>
                  </div>
                </Link>
              </div>
              <div className="flex items-center text-lg p-2">
                <CurrencyDollarIcon size={28} className="mr-2" />
                <span>{group.entry_fee == "Free" ? "Free" : group.entry_fee}</span>
              </div>
              {groupCubes[group.id].length > 0 && (
                <div className="flex items-center text-lg p-2">
                  <Link
                    className="inline-flex items-center hover:underline hover:text-blue-300"
                    href={`/cubes?group_id=${group.id}`}
                    rel="noopener noreferrer"
                  >
                    <CubeIcon className="mr-2" size={28} />
                    <span>Cubes</span>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div >
      </div >
    </div >
  )
};