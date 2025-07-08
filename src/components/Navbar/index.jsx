import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <nav className="fixed h-16 w-full px-4 flex items-center justify-between bg-[var(--primary)] ">
      <div className="container mx-auto flex justify-between items-center h-full md:px-4 px-2 md:ml-64 ">
        <Link href={`/`} className="text-[var(--color-base)] md:text-lg text-sm font-bold">AnimeList</Link>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="md:text-lg text-sm text-[var(--color-base)] hover:text-gray-800">Home</a>
          </li>
          <li>
            <a href="/about" className="md:text-lg text-sm text-[var(--color-base)] hover:text-gray-800">About</a>
          </li>
        </ul>
        <InputSearch />
      </div>
    </nav>
  );
}

export default Navbar;