import Link from "next/link";
import React from "react";

export const BotaoLink = ({
  children = "empty!",
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};
