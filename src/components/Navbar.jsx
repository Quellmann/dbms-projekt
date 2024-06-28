import { NavLink } from "react-router-dom";
import {
  DocumentTextIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import MenuDropdown from "./MenuDropdown";
import DarkmodeToggle from "./DarkmodeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-slate-900/10 dark:border-slate-300/10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex pr-3">
          <span className="sr-only">Learning Platform</span>
          <img className="h-14 w-auto" src="/goethe-uni-book.png" alt="" />
        </div>
        <NavLink
          to="/"
          className="flex rounded-lg py-2 px-3 text-m font-semibold leading-7 text-gray-900 hover:bg-gray-200 dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-sky-900"
        >
          <HomeIcon className="h-6 w-6" aria-hidden="true"></HomeIcon>
          <h1>Home</h1>
        </NavLink>
        <NavLink
          to="/courselist"
          className="flex rounded-lg py-2 px-3 text-m font-semibold leading-7 text-gray-900 hover:bg-gray-200 dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-sky-900"
        >
          <DocumentTextIcon
            className="h-6 w-6"
            aria-hidden="true"
          ></DocumentTextIcon>
          <h1>Courses</h1>
        </NavLink>
        <div className="flex flex-1 justify-center">
          <div className="relative rounded-md ">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 dark:text-slate-200 dark:hover:text-sky-400">
              <MagnifyingGlassIcon
                className="h-6 w-6"
                aria-hidden="true"
              ></MagnifyingGlassIcon>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="flex w-full rounded-md py-2 pl-10 pr-32 text-gray-900 ring-1 ring-gray-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-sky-900"
            />
          </div>
        </div>
        <DarkmodeToggle></DarkmodeToggle>
        <MenuDropdown></MenuDropdown>
      </nav>
    </header>
  );
}
