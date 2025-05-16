"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavMenu() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/locations", label: "Locations" },
    { href: "/cubes", label: "Cubes" },
    { href: "https://discord.gg/h45vZ3Hr8x", label: "Discord", target: "_blank" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
      <div>
        <Link href="/" className="text-xl font-bold">
          PNW Cube Drafters
        </Link>
      </div>
      <nav className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        {navLinks.map(({ href, label, target }) => (
          <Link
            key={href}
            href={href}
            target={target ? target : undefined}
            className={`sm:px-2 md:px-4 hover:underline ${isActive(href) ? "font-bold underline" : "text-blue-300"
              }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}