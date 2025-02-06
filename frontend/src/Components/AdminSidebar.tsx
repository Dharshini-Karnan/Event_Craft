import { FaCalendar, FaGear, FaHouse } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
type NavLink = {
    label: string;
    to_url: string;
    icon: JSX.Element
}

const NavLinks: NavLink[] = [
    {
        label: "Dashboard",
        to_url: "/admin",
        icon: <FaHouse className="h-4 w-4" />
    },
    {
        label: "Events",
        to_url: "/admin/events",
        icon: <FaCalendar className="h-4 w-4" />
    },
    {
        label: "Manage",
        to_url: "/admin/theme",
        icon: <FaGear className="h-4 w-4" />
    },


]


export default function AdminSideBar({ selected }: { selected: "dashboard" | "events" | "manage" }) {
    const isDarkmode = useSelector((state) => state.isDarkmode);
    // console.log(isDarkmode);

    return (
        <div className={`${isDarkmode ? 'dark' : ''} `}>
            <div className="hidden border-r  dark:bg-mine     lg:block">
                <div className="flex h-full max-h-screen flex-col gap-2">

                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 ">
                            {
                                NavLinks.map((ele: NavLink, index: number) => {
                                    return (
                                        <Link
                                            className={`flex items-center gap-3 rounded-lg px-3 py-2 dark:text-white    ${(selected === ele.label.toLowerCase()) ? "text-black   font-bold" : "text-gray-800 "} transition-all hover:text-gray-900`}
                                            to={ele.to_url} key={index}
                                        >
                                            {ele.icon}
                                            {ele.label}
                                        </Link>
                                    )
                                })
                            }
                            <div>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}