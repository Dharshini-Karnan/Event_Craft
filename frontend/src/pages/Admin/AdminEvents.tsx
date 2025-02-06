import { useEffect, useState } from "react";
// import NotFoundPage from "../NotFound";

import { Card } from "../../Components/card";
import { Button } from "../../Components/button";
import { Label } from "../../Components/label";
import { Input } from "../../Components/input";
import { Textarea } from "../../Components/textarea";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";

import { useSelector } from 'react-redux';
import AdminSideBar from "../../Components/AdminSidebar";
import { toast } from "sonner";
import axios from "axios";

export default function AdminEvents() {
    const isDarkmode = useSelector((state) => state.isDarkmode)
    // console.log(isDarkmode);
    const [event, setEvent] = useState([]);
    const getEvent = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/user/get/events"
            )
            // console.log(response);
            setEvent(response.data);
        }
        catch {
            toast.error("Fetching Response Error");
        }
    }
    useEffect(() => {
        getEvent();
    })
    return (
        <div>
            <Navbar />
            <div className={`${isDarkmode ? 'dark' : ''} `}>
                <div className="grid dark:bg-mine bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
                    <AdminSideBar selected="dashboard" />
                    <div className="flex flex-col">
                        <main className="flex flex-col gap-4 md:gap-8 md:p-6">
                            <div className="flex gap-2 lg:flex-row sm:flex-col flex-col w-full p-[1.5rem]  dark:bg-mine bg-gray-100   ">


                                <div className="lg:w-full m-2 sm:w-full sm: h-[596px] h-[506px]  bg-gray-50 dark:bg-m2 relative border-solid rounded-xl ">
                                    <div className="sm:flex-row flex-col ml-[30px] ">


                                        <div className="relative overflow-x-auto">
                                            <h1 className="dark:text-gray-400 font-bold text-2xl text-center">All events</h1>
                                            <br></br>
                                            <table className="w-full caption-bottom text-sm">
                                                <thead className="[&amp;_tr]:border-b">
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted dark:text-white">
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Event Name
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Theme
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Date
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Number of Guests Attended
                                                        </th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="[&amp;_tr:last-child]:border-0 dark:text-gray-300">
                                                    {event.map((eventItem, index) => (
                                                        <tr key={index} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{eventItem.eventName}</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{eventItem.eventTheme.themeName}</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">{eventItem.eventDate}</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{eventItem.attendees}</td>
                                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 dark:text-purple-500">{eventItem.eventTheme.themeCost}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
