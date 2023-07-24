import Link from "next/link";

export interface MenuLateralItemProps {
  title: string;
  to: string;
}

export const MenuLateralItem = ({ title, to }: MenuLateralItemProps) => {
  return (
    <li className="w-full">
      <Link
        href={to}
        className=" hover:bg-gray-400 hover:text-white w-full block py-4 pl-8"
      >
        {title}
      </Link>
    </li>
  );
};
