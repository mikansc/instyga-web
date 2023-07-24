import Link from "next/link";

export interface HeaderLinkItem {
  to: string;
  title: string;
}

export const HeaderLink = ({ to, title }: HeaderLinkItem) => {
  return (
    <li className="mr-4">
      <Link href={to}>{title}</Link>
    </li>
  );
};
