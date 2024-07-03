import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  IdentificationIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const solutions = [
  {
    name: "Account",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: IdentificationIcon,
  },
  {
    name: "Edit my courses",
    description: "Speak directly to your customers",
    href: "/editMyCourses",
    icon: PencilSquareIcon,
  },
  {
    name: "Create new course",
    description: "Connect with third-party tools",
    href: "/createNewCourse",
    icon: SquaresPlusIcon,
  },
  {
    name: "Help",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Log out",
    description: "",
    href: "/login",
    icon: ArrowRightEndOnRectangleIcon,
  },
];

export default function MenuDropdown() {
  const { user, logout } = useAuth();

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
        <PopoverPanel className="absolute -left-44 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-800 dark:text-slate-200">
            <div className="p-4">
              {solutions.map((item) => (
                <NavLink
                  to={item.href}
                  onClick={handleLogout}
                  // className="font-semibold text-gray-900 dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-sky-900"
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-200  dark:hover:bg-sky-900"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
