export function Header() {
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
            <li className="mr-4">
              <a href="#">Home</a>
            </li>
            <li className="mr-4">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
