import Link from "next/link";
import React from "react";

export const BotaoLink = ({
  children = "empty!",
  href,
  color = "gray",
}: {
  children: React.ReactNode;
  href: string;
  color?: "green" | "red" | "blue" | "gray";
}) => {
  const c = {
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    gray: "bg-gray-900 hover:bg-gray-800",
  };

  return (
    <Link
      href={href}
      className={`mt-4 px-4 py-2 ${c[color]} text-white rounded transition-colors duration-300 ease-in-out`}
    >
      {children}
    </Link>
  );
};
