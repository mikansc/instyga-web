import { HeaderLink, type HeaderLinkItem } from "./HeaderLink";

export function Header({ links }: { links: HeaderLinkItem[] }) {
  return (
    <header className="w-full h-16 bg-gray-800 text-white">
      <div
        className="container mx-auto 
      flex justify-between items-center h-full px-4
      "
      >
        <h1>Instyga</h1>
        <nav className="flex justify-between items-center">
          <ul className="flex">
            {links.map((link) => {
              return (
                <HeaderLink key={link.to} to={link.to} title={link.title} />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
