import { useState } from "react";
import Chart from "react-apexcharts";
import { FaCalendarPlus, FaCheck, FaCircleCheck } from "react-icons/fa6"
import { motion } from "framer-motion";
// import NotFoundPage from "../NotFound";
import AdminSideBar from "./AdminSidebar";
// import AdminHeader from "../../components/AdminHeader";
import Navbar from "./navbar";
import Footer from "./footer";
import { useSelector } from 'react-redux';
export default function DashboardPage() {


    return <Dashboard />

}

type ApexChartsData = {
    options: ApexCharts.ApexOptions;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}

function Dashboard() {
    const [barGraphData] = useState<ApexChartsData>({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ["Classic", "Star Wars", "Enchanted Forest", "Dinosaurs", "Halloween"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 55, 21, 70, 25],
                color: "#2D3250"
            }
        ]
    });
    const [SalesGraphData] = useState<ApexChartsData>({
        options: {
            chart: {
                id: "basic-line",
            },
            xaxis: {
                categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 55, 21, 70, 25],
                color: "#2D3250"
            }
        ]
    });
    const [lineGraphData] = useState<ApexChartsData>({
        options: {
            chart: {
                id: "basic-line"
            },
            xaxis: {
                categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
            }
        },
        series: [{
            name: 'Classic',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'Star Wars',
            data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
            name: 'Enchanced Forest',
            data: [21, 22, 25, 22, 24, 32, 21]
        },
        {
            name: 'Dino',
            data: [31, 32, 35, 32, 34, 42, 31]
        },
        {
            name: 'Halloween',
            data: [41, 42, 25, 12, 54, 12, 21]
        },

        ],
    })
    const isDarkmode = useSelector((state) => state.isDarkmode);
    return (
        <div className={`${isDarkmode ? 'dark' : ''} `}>
            <Navbar />
            <div className="grid dark:bg-mine min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <AdminSideBar selected="dashboard" />
                <div className="flex flex-col">
                    <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">

                        <div className="dark:bg-m2 bg-gray-200 p-3 rounded-xl">
                            <h3 class="dark:text-white text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Revenue Generation</h3>
                            <p class="dark:text-white text-sm text-muted-foreground">View the revenue generated over time</p><br></br>
                            <div className="p-2  w-full">
                                <div className="border shadow-md rounded-lg p-2  bg-gray-50">
                                    <h2 className="text-xl mb-2">Overall sales vs month</h2>
                                    <div className="flex items-center justify-center ">
                                        <Chart
                                            options={SalesGraphData.options}
                                            series={SalesGraphData.series}
                                            type="area"
                                            height={350}

                                            width={950}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row w-full justify-between">
                                <div className="p-2 w-full">
                                    <div className="border shadow-md rounded-lg p-2 bg-gray-50">
                                        <h2 className="text-xl mb-2">Bookings v/s theme</h2>
                                        <Chart
                                            options={barGraphData.options}
                                            series={barGraphData.series}
                                            type="bar"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="border shadow-md rounded-lg p-2 bg-gray-50">
                                        <h2 className="text-xl mb-2">Customer Ratings</h2>
                                        <Chart
                                            options={lineGraphData.options}
                                            series={lineGraphData.series}
                                            type="line"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" dark:bg-m2 bg-gray-200 p-3 rounded-xl">
                            <h3 class=" dark:text-white text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Sales by Theme</h3>
                            <p class=" dark:text-white text-sm text-muted-foreground">View the number of sales for each theme</p><br></br>
                            <div className="flex flex-2 w-full justify-between">
                                <div className="p-2 w-full">
                                    <motion.div
                                        className=" shadow-md border-gray-200 px-4 py-6 rounded-lg bg-gray-50"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="rounded-lg  bg-card text-card-foreground  w-full max-w-sm" data-v0-t="card">
                                            <div className="flex-col space-y-1.5 p-6 flex items-center gap-4">
                                                <div className="flex flex-col">
                                                    <h3 className="whitespace-nowrap text-sm font-semibold tracking-wide">Princess Theme</h3>
                                                    <p className="text-muted-foreground text-xs leading-none">25% of sales</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="w-8 h-8"
                                                >
                                                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
                                                </svg>
                                            </div>
                                            <div className="p-6 flex items-center justify-between">
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Total Sales</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$25,000</p>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Avg. Revenue</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$1,000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-2 w-full">
                                    <motion.div
                                        className=" shadow-md border-gray-200 px-4 py-6 rounded-lg bg-gray-50"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="rounded-lg  bg-card text-card-foreground  w-full max-w-sm" data-v0-t="card">
                                            <div className="flex-col space-y-1.5 p-6 flex items-center gap-4">
                                                <div className="flex flex-col">
                                                    <h3 className="whitespace-nowrap text-sm font-semibold tracking-wide">Classic Theme</h3>
                                                    <p className="text-muted-foreground text-xs leading-none">25% of sales</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="w-8 h-8"
                                                >
                                                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
                                                </svg>
                                            </div>
                                            <div className="p-6 flex items-center justify-between">
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Total Sales</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$25,000</p>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Avg. Revenue</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$1,000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-2 w-full">
                                    <motion.div
                                        className="shadow-md border-gray-200 px-4 py-6 rounded-lg bg-gray-50"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="rounded-lg  bg-card text-card-foreground  w-full max-w-sm" data-v0-t="card">
                                            <div className="flex-col space-y-1.5 p-6 flex items-center gap-4">
                                                <div className="flex flex-col">
                                                    <h3 className="whitespace-nowrap text-sm font-semibold tracking-wide">Halloween Theme</h3>
                                                    <p className="text-muted-foreground text-xs leading-none">25% of sales</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="w-8 h-8"
                                                >
                                                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
                                                </svg>
                                            </div>
                                            <div className="p-6 flex items-center justify-between">
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Total Sales</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$25,000</p>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Avg. Revenue</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$1,000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-2 w-full">
                                    <motion.div
                                        className="border shadow-md border-gray-200 px-4 py-6 rounded-lg bg-gray-50"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="rounded-lg  bg-card text-card-foreground  w-full max-w-sm" data-v0-t="card">
                                            <div className="flex-col space-y-1.5 p-6 flex items-center gap-4">
                                                <div className="flex flex-col">
                                                    <h3 className="whitespace-nowrap text-sm font-semibold tracking-wide">Dino Theme</h3>
                                                    <p className="text-muted-foreground text-xs leading-none">25% of sales</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="w-8 h-8"
                                                >
                                                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
                                                </svg>
                                            </div>
                                            <div className="p-6 flex items-center justify-between">
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Total Sales</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$25,000</p>
                                                </div>
                                                <div className="flex flex-col text-sm">
                                                    <p className="font-medium">Avg. Revenue</p>
                                                    <p className="text-lg font-semibold tracking-tighter">$1,000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div >
            </div >
            <Footer />
        </div>
    )
}