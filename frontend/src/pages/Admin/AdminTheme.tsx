import { useEffect, useState } from "react";
// import NotFoundPage from "../NotFound";

import { Card } from "../../Components/card";
import { Button } from "../../Components/button";
import { Label } from "../../Components/label";
import { Input } from "../../Components/input";
import { Textarea } from "../../Components/textarea";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import AdminSideBar from "../../Components/AdminSidebar";
import axios from "axios";
import { toast } from "sonner";

export default function AdminTheme() {
    const isDarkmode = useSelector((state) => state.isDarkmode)
    // console.log(isDarkmode);
    // console.log("Vanakam Da Mapla!")
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [editThemeId, setEditThemeId] = useState("");
    const [editThemeName, setEditThemeName] = useState("");
    const [editThemeImageURL, setEditThemeImageURL] = useState("");
    const [editThemeDescription, setEditThemeDescription] = useState("");
    const [editThemeCost, setEditThemeCost] = useState("");

    const [themeName, setThemeName] = useState("");
    const [themeImageURL, setthemeImageURL] = useState("");
    const [themeDescription, setthemeDescription] = useState("");
    const [themeCost, setthemeCost] = useState("");

    const [themes, setThemes] = useState([]);

    const handleNameChange = (e) => {
        setThemeName(e.target.value);
    }

    const handleImageChange = (e) => {
        setthemeImageURL(e.target.value);
    }

    const handleeDescChange = (e) => {
        setthemeDescription(e.target.value);
    }

    const handleCostChange = (e) => {
        setthemeCost(e.target.value);
    }

    const getTheme = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/admin/get/themes"
            )
            // console.log(response);
            setThemes(response.data);
        }
        catch {
            toast.error("Fetching Response Error");
        }
    }
    useEffect(() => {
        getTheme();
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = Cookies.get('id');
        try {
            const response = await axios.post(
                `http://localhost:8080/admin/add/theme/${id}`,
                {
                    themeName: themeName,
                    themeImageURL: themeImageURL,
                    themeDescription: themeDescription,
                    themeCost: themeCost,

                }
            );
            // console.log(response);
            toast.success("Theme Added");
            getTheme();
            setThemeName("");
            setthemeCost("");
            setthemeDescription("");
            setthemeImageURL("");
            // const role=Cookies.get('role');

        } catch (error) {
            console.log(error);
            // toast.error('Invalid Credentials');
        }
    };
    const handleDelete = async (id) => {

        if (window.confirm("Are you sure you want to delete this theme?")) {
            try {
                const response = await axios.delete(
                    `http://localhost:8080/admin/delete/theme/${id}`
                );

                if (response.status === 200) {
                    toast.success("Theme Deleted");
                    getTheme();
                } else {
                    toast.error("Error deleting theme");
                }
            } catch (error) {
                // console.log(error);
                toast.error("Error deleting theme");
            }
        }
    };
    const handleEdit = async (id) => {
        const themeToEdit = themes.find((theme) => theme.themeId === id);
        if (themeToEdit) {
            setEditThemeId(themeToEdit.themeId);
            setEditThemeName(themeToEdit.themeName);
            setEditThemeImageURL(themeToEdit.themeImageURL);
            setEditThemeDescription(themeToEdit.themeDescription);
            setEditThemeCost(themeToEdit.themeCost);

        }
        setIsEditModalOpen(true);
        console.log(`Edit Theme with ID: ${id}`);
    };
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:8080/admin/update/theme/${editThemeId}`,
                {
                    themeName: editThemeName,
                    themeImageURL: editThemeImageURL,
                    themeDescription: editThemeDescription,
                    themeCost: editThemeCost,
                }
            );
            if (response.status === 200) {
                toast.success("Theme Updated");
                getTheme();
                setIsEditModalOpen(false);
            } else {
                toast.error("Error updating theme");
            }
        } catch (error) {
            // console.log(error);
            toast.error("Error updating theme");
        }
    }
    const handleEditNameChange = (e) => {
        setEditThemeName(e.target.value);
    }

    const handleEditDescChange = (e) => {
        setEditThemeDescription(e.target.value);
    }

    const handleEditCostChange = (e) => {
        setEditThemeCost(e.target.value);
    }

    const handleEditImageChange = (e) => {
        setEditThemeImageURL(e.target.value);
    }
    const token = useSelector((state) => state.token);
    // console.log(token);
    return (
        <div>
            <Navbar />
            <div className={`${isDarkmode ? 'dark' : ''} `}>
                <div className="grid dark:bg-mine bg-white min-h-screen w-full lg:grid-cols-[280px_1fr]">
                    <AdminSideBar selected="dashboard" />
                    <div className="flex flex-col">
                        <main className="flex flex-col gap-4 p-2 md:gap-8 md:p-6">
                            <div className="flex gap-2 lg:flex-row sm:flex-col flex-col w-full p-[1.5rem]  dark:bg-mine bg-gray-100   ">
                                <div className=" rounded-xl m-2  lg:w-[calc(63%-4px)] sm:w-full h-[596px] dark:bg-m2 bg-gray-200 p-6">

                                    <Card className=" dark:bg-gray-800 bg-gray-50 shadow-md">
                                        <h1 className="text-3xl text-center font-semibold py-4  dark:text-white">Add Theme</h1>
                                        <form className="grid gap-4 p-6 dark:text-white" onSubmit={handleSubmit}>
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Theme Name</Label>
                                                <Input id="title" value={themeName}
                                                    onChange={handleNameChange} placeholder="Title" className="input bg-gray-50 focus:bg-gray-100 dark:text-black" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="description">Theme Description</Label>
                                                <Textarea id="description" value={themeDescription}
                                                    onChange={handleeDescChange} placeholder="Describe the theme here..." className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="file">Theme Cost</Label>
                                                <Input id="cost" value={themeCost}
                                                    onChange={handleCostChange} type="number" placeholder="$500" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" defaultValue={500} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="file">Theme Image</Label>
                                                <Input id="imageURL" type="string" value={themeImageURL}
                                                    onChange={handleImageChange} className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                            </div>
                                            <Button className="btn btn-success btn-outline bg-gray-50  dark:text-black" type="submit">Submit</Button>
                                        </form>
                                    </Card>


                                    {isEditModalOpen && (

                                        <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                                            <div className=" rounded-xl m-2  lg:w-[calc(63%-4px)] sm:w-full h-[596px] dark:bg-m2 bg-gray-200 p-6">
                                                <Card className=" dark:bg-gray-800 bg-gray-50  shadow-md">
                                                    <h1 className="text-3xl text-center font-semibold py-4  dark:text-white">Edit Theme</h1>
                                                    <form className="grid gap-4 p-6 dark:text-white" onSubmit={handleEditSubmit}>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="title">Theme Name</Label>
                                                            <Input id="title" value={editThemeName}
                                                                onChange={handleEditNameChange} placeholder="Title" className="input bg-gray-50 focus:bg-gray-100 dark:text-black" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="description">Theme Description</Label>
                                                            <Textarea id="description" value={editThemeDescription}
                                                                onChange={handleEditDescChange} placeholder="Describe the theme here..." className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="file">Theme Cost</Label>
                                                            <Input id="cost" value={editThemeCost}
                                                                onChange={handleEditCostChange} type="number" placeholder="$500" className="input bg-gray-50 focus:bg-gray-100  dark:text-black" defaultValue={500} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="file">Theme Image</Label>
                                                            <Input id="imageURL" type="string" value={editThemeImageURL}
                                                                onChange={handleEditImageChange} className="input bg-gray-50 focus:bg-gray-100  dark:text-black" required />
                                                        </div>
                                                        <Button className="btn btn-success btn-outline bg-gray-50  dark:text-black" type="submit">Submit</Button>
                                                    </form>
                                                </Card>
                                            </div>
                                        </div>
                                    )}

                                </div>

                                <div className="lg:w-full m-2 sm:w-full sm: h-[596px] h-[506px]  bg-gray-200 dark:bg-m2 relative border-solid rounded-xl ">
                                    <div className="sm:flex-row flex-col ml-[30px] ">


                                        <div className="relative overflow-x-auto">
                                            <h1 className="dark:text-gray-400 font-bold text-2xl text-center">Themes</h1>
                                            <br></br>
                                            <table className="w-[96%] text-sm text-left rtl:text-right text-gray-500 dark:text-purple-400">
                                                <thead className="texxt-xs text-gray-900 uppercase dark:text-gray-400 ">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Name
                                                        </th>


                                                        <th scope="col" className="px-6 py-3">
                                                            Price
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {themes.map((theme) => (
                                                        <tr key={theme.themeId} className="bg-gray-100 dark:bg-gray-800 hover:dark:bg-purple-900">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {theme.themeName}
                                                            </th>

                                                            <td className="px-6 py-4">
                                                                ${theme.themeCost}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <Button onClick={() => handleEdit(theme.themeId)} className="btn btn-warning btn-outline bg-gray-50 dark:text-black">
                                                                    Edit
                                                                </Button>
                                                                <Button onClick={() => handleDelete(theme.themeId)} className="btn btn-danger btn-outline bg-gray-50 dark:text-black">
                                                                    Delete
                                                                </Button>
                                                            </td>
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
