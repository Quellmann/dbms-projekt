import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  Cog6ToothIcon,
  PlusIcon,
  ArrowLeftStartOnRectangleIcon,
  FolderOpenIcon,
  DocumentTextIcon,
  HomeIcon,
  UsersIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

import { useAuth } from "../context/UserContext";

const loggedOutOptions = [
  {
    name: "Register",
    href: "/register",
    icon: PlusIcon,
  },
  {
    name: "Log In",
    href: "/login",
    icon: ArrowRightEndOnRectangleIcon,
  },
];

const studentOptions = [
  {
    name: "Courses",
    href: "/courses",
    icon: DocumentTextIcon,
  },
  {
    name: "Quizzes",
    href: "/quizzes",
    icon: PuzzlePieceIcon,
  },
];

// We should keep track of what courses each teacher
// is responsible for and let them see a dash of the courses.
// Likely we should probably not be showing them the course
// material of other coursesa nd lectures.
const teacherOptions = [
  {
    name: "Manage Students",
    href: "/teacher/users",
    icon: UsersIcon,
  },
  {
    name: "Manage Courses",
    href: "/courses",
    icon: FolderOpenIcon,
  },
];

const adminOptions = [
  {
    name: "Manage Users",
    href: "/admin/users",
    icon: UsersIcon,
  },
  {
    name: "Manage Courses",
    href: "/courses",
    icon: FolderOpenIcon,
  },
];

function getOptions(user) {
  if (!user) {
    return loggedOutOptions;
  } else if (user.role === "student") {
    return studentOptions;
  } else if (user.role === "teacher") {
    return teacherOptions;
  } else {
    return adminOptions;
  }
}

export default function MenuDropdown() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const dropdownOptions = getOptions(user);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Popover className="relative">
      <PopoverButton className="flex rounded-lg p-2 hover:bg-gray-200 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-sky-900">
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-7 w-7" aria-hidden="true" />
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-20 mt-5 flex w-screen max-w-max -translate-x-[92%] px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-800 dark:text-slate-200">
            <div className="p-4">
              {user && (
                <PopoverButton
                  onClick={() => navigate("/dashboard")}
                  className="group relative flex w-full items-center gap-x-6 rounded-lg p-4 hover:bg-gray-200  dark:hover:bg-sky-900"
                >
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <HomeIcon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  Dashboard
                </PopoverButton>
              )}
              {dropdownOptions.map((item) => (
                <PopoverButton
                  onClick={() => navigate(item.href)}
                  key={item.name}
                  className="group relative flex w-full items-center gap-x-6 rounded-lg p-4 hover:bg-gray-200  dark:hover:bg-sky-900"
                >
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  {item.name}
                </PopoverButton>
              ))}
              {user != null ? (
                <PopoverButton
                  onClick={handleLogout}
                  key={"logout"}
                  className="group relative flex w-full items-center gap-x-6 rounded-lg p-4 hover:bg-gray-200  dark:hover:bg-sky-900"
                >
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <ArrowLeftStartOnRectangleIcon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  Log Out
                </PopoverButton>
              ) : null}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
