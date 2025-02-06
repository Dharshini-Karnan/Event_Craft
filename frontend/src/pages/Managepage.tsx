import { useState } from "react";
// import NotFoundPage from "../NotFound";

import { Card } from "../Components/card";
import { Button } from "../Components/button";
import { Label } from "../Components/label";
import { Input } from "../Components/input";
import { Textarea } from "../Components/textarea";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

import { useSelector } from 'react-redux';

export default function ManagePage() {
    const isDarkmode = useSelector((state) => state.isDarkmode)
    console.log(isDarkmode);
    return (
        <div>
            <Navbar />
            <div className={`${isDarkmode ? 'dark' : ''} `}>
                <div className="flex flex-row items-center justify-center pt-[5.5rem] dark:bg-mine ">

                    <main className="flex justify-center gap-4 p-4 dark:bg-m2">
                        <Card className=" dark:bg-gray-800 bg-gray-50 shadow-md">
                            <h1 className="text-3xl text-center font-semibold py-4  dark:text-white">Add Theme</h1>
                            <form className="grid gap-4 p-6 dark:text-white">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Theme Name</Label>
                                    <Input id="title" placeholder="Title" className="input bg-gray-50 focus:bg-gray-100 dark:text-black" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Theme Description</Label>
                                    <Textarea id="description" placeholder="Describe the theme here..." className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="file">Theme Cost</Label>
                                    <Input id="cost" type="number" placeholder="₹500" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" defaultValue={500} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="file">Theme Image</Label>
                                    <Input id="file" type="file" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                </div>
                                <Button className="btn btn-success btn-outline bg-gray-50  dark:text-black" type="submit">Submit</Button>
                            </form>
                        </Card>
                    </main>
                    <main className="flex justify-center gap-4 p-4 dark:bg-m2">
                        <Card className=" dark:bg-gray-800 bg-gray-50 shadow-md">
                            <h1 className="text-3xl text-center font-semibold py-4  dark:text-white">Add Food</h1>
                            <form className="grid gap-4 p-6 dark:text-white">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Food Name</Label>
                                    <Input id="title" placeholder="Title" className="input bg-gray-50 focus:bg-gray-100 dark:text-black" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Food Description</Label>
                                    <Textarea id="description" placeholder="Describe the theme here..." className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="file">Food Cost</Label>
                                    <Input id="cost" type="number" placeholder="₹500" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" defaultValue={500} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="file">Food Image</Label>
                                    <Input id="file" type="file" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                </div>
                                <Button className="btn btn-success btn-outline bg-gray-50  dark:text-black" type="submit">Submit</Button>
                            </form>
                        </Card>
                    </main>
                    <main className="flex justify-center gap-4 p-4 dark:bg-m2">
                        <Card className=" dark:bg-gray-800 bg-gray-50 shadow-md">
                            <h1 className="text-3xl text-center font-semibold py-4  dark:text-white">Add Add on</h1>
                            <form className="grid gap-4 p-6 dark:text-white">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Add on Name</Label>
                                    <Input id="title" placeholder="Title" className="input bg-gray-50 focus:bg-gray-100 dark:text-black" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Add on Description</Label>
                                    <Textarea id="description" placeholder="Describe the theme here..." className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="file">Add on Cost</Label>
                                    <Input id="cost" type="number" placeholder="₹500" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" defaultValue={500} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="file">Add on Image</Label>
                                    <Input id="file" type="file" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                </div>
                                <Button className="btn btn-success btn-outline bg-gray-50  dark:text-black" type="submit">Submit</Button>
                            </form>
                        </Card>
                    </main>

                </div>
            </div>
            <Footer />
        </div>
    )
}
