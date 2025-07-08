import Image from "next/image";
import logo from "./logo.svg";

// components/Sidebar.js
const SideBar = () => {
  return (
     <aside className="hidden md:block fixed top-0 left-0 md:w-64 w-auto h-full text-gray-900 p-4 z-40">
      <Image src={logo} width={50} height={50} alt="icon" className="flex justify-center items-center ml-5"/>
      <nav className="flex flex-col gap-4 p-6">
        <a href="#" className="text-[var(--color-base)] hover:bg-[var(--tertiary)] hover:text-[var(--secondary)] p-2 rounded">Dashboard</a>
        <a href="#" className="text-[var(--color-base)] hover:bg-[var(--tertiary)] hover:text-[var(--secondary)] p-2 rounded">Profile</a>
        <a href="#" className="text-[var(--color-base)] hover:bg-[var(--tertiary)] hover:text-[var(--secondary)] p-2 rounded">Settings</a>
        <a href="#" className="text-[var(--color-base)] hover:bg-[var(--tertiary)] hover:text-[var(--secondary)] p-2 rounded">Logout</a>
      </nav>
    </aside>
  );
}
export default SideBar;
