import React, { Component, useEffect } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { connect } from 'react-redux';
import mail from "../assets/images/system-regular-59-email.gif";
import user from "../assets/images/system-regular-8-account.gif";
import phone from "../assets/images/system-regular-58-call-phone.gif";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const Userprofile = ({ isDarkmode }) => {

    const token = sessionStorage.getItem('jwtToken');
    const navigate = useNavigate();

    useEffect(() => {
        const decodeToken = (token) => {
            if (!token) {
                navigate("/");
                // toast.error("Credentials Required!");

            }

            try {
                const payloadBase64 = token.split('.')[1];
                const decodedToken = JSON.parse(atob(payloadBase64));
                const isTokenValid = decodedToken && decodedToken.exp > Math.floor(Date.now() / 1000);

                if (!isTokenValid) {
                    navigate("/");
                    toast.error("Invalid Token!");
                    return null;
                }
                console.log("Decoded Token:", decodedToken.sub);
                return decodedToken;
            } catch (error) {
                console.error("Error decoding token:", error);
                navigate("/");
                toast.error("Invalid Token!");
                return null;
            }
        };
        const decodedToken = decodeToken(token);

       
        if (decodedToken) {
            // Your logic here
            // console.log(decodeToken);
        }

    }, [token]);

    return (
        <div>
            <Navbar />
            <div className={`${isDarkmode ? 'dark' : ''} `}>
                <div className="flex gap-2 lg:flex-row sm:flex-col flex-col w-full p-[5.5rem]  dark:bg-mine bg-gray-100   ">
                    <div className=" rounded-xl m-2  lg:w-[calc(63%-4px)] sm:w-full h-[506px] dark:bg-m2 bg-gray-200 p-6">

                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="ml-[30%] w-[9rem] h-[9rem] rounded-xl"
                        />

                        <form action="#">
                            <div className="flex flex-col mb-5">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-xs tracking-wide text-gray-600 dark:text-white"
                                >
                                    Name:
                                </label>
                                <div className="relative">
                                    <div
                                        className="
            inline-flex
            items-center
            justify-center
            absolute
            left-[8px]
            top-0
            h-full
            w-[1.5rem]
            text-gray-400
          "
                                    >
                                        <img src={user} />
                                    </div>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
            focus:outline-none focus:border-blue-400
          "
                                        placeholder="Sample user"
                                    />

                                </div>

                            </div>
                            <div className="flex flex-col mb-5">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-xs tracking-wide text-gray-600 dark:text-white"
                                >
                                    E-Mail Address:
                                </label>
                                <div className="relative">
                                    <div
                                        className="
            inline-flex
            items-center
            justify-center
            absolute
            left-[8px]
            top-0
            h-full
            w-[1.5rem]
            text-gray-400
          "
                                    >
                                        <img src={mail} />
                                    </div>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
            focus:outline-none focus:border-blue-400
          "
                                        placeholder="sample@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="password"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white"
                                >
                                    Phone Number:
                                </label>
                                <div className="relative">
                                    <div
                                        className="
            inline-flex
            items-center
            justify-center
            absolute
            left-[8px]
            top-0
            h-full
            w-[1.5rem]
            text-gray-400
          "
                                    >
                                        <img src={phone} />
                                    </div>

                                    <input
                                        id="pnumber"
                                        type="text"
                                        name="pnumber"
                                        className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
            focus:outline-none focus:border-blue-400
          "
                                        placeholder="9445986633"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-6">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="
    inline-flex
    items-center
    text-gray-700
    font-medium
    text-xs text-center
    dark:text-white
  "
                                >

                                </a>
                            </div>

                        </form>
                        <div className="flex justify-end mt-6">
                            <button
                                type="button"
                                className="
        bg-gray-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        focus:outline-none focus:shadow-outline-blue
        "
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="
        bg-gray-500
        hover:bg-green-700
        text-white
        font-bold
        py-2
        px-4
        ml-2
        rounded
        focus:outline-none focus:shadow-outline-green
        "
                            >
                                Save
                            </button>
                        </div>

                    </div>

                    <div className="lg:w-full m-2 sm:w-full sm: h-[506px] h-[506px]  bg-gray-200 dark:bg-m2 relative border-solid rounded-xl ">
                        <div className="sm:flex-row flex-col ml-[30px] ">


                            <div className="relative overflow-x-auto">
                                <h1 className="dark:text-gray-400 font-bold text-2xl text-center">Recent Bookings</h1>
                                <table className="w-[96%] text-sm text-left rtl:text-right text-gray-500 dark:text-purple-400">
                                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 ">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Theme
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Food
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Add ons
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-100 hover:dark:bg-purple-900 dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Halloween Theme
                                            </th>
                                            <td className="px-6 py-4">
                                                North Indian
                                            </td>
                                            <td className="px-6 py-4">
                                                Ghosting
                                            </td>
                                            <td className="px-6 py-4">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-100 dark:bg-gray-800  hover:dark:bg-purple-900">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Dino Theme
                                            </th>
                                            <td className="px-6 py-4">
                                                South Indian
                                            </td>
                                            <td className="px-6 py-4">
                                                Mehanthi circus
                                            </td>
                                            <td className="px-6 py-4">
                                                $1999
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-100 dark:bg-gray-800  hover:dark:bg-purple-900">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-100 dark:bg-gray-800  hover:dark:bg-purple-900">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-100 dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-100 dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-100 dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-100 dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    );
}

const mapStateToProps = (state) => ({
    isDarkmode: state.isDarkmode,
});
export default connect(mapStateToProps)(Userprofile);