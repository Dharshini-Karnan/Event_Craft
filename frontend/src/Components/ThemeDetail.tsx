import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import cakeimage from "../assets/images/pexels-antonio-quagliata-227432.jpg";
import partysnack from "../assets/images/pexels-rachel-claire-4825743.jpg";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface ThemeDetailProps { }
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        position: 'relative',
        background: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
};
const MySwal = withReactContent(Swal);
export default function ThemeDetail(): ThemeDetailProps {
    const [foodPreference, setFoodPreference] = useState('');
    const [addOns, setAddOns] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();
    const { index } = useParams();
    const selectedImage = location.state?.selectedImage || '';
    const selectedDescription = location.state?.selectedDescription || '';
    //   const selectedDescription = descriptions[parseInt(index || '0', 10)];

    const isDarkmode = useSelector((state) => state.isDarkmode)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    // console.log('isDarkmode', isDarkmode);
    const openPayment = () => {
        const amount = 100;
        if (amount > 0) {
            const options = {
                key: 'rzp_test_MmPRCpwT74cPXY',
                key_secret: '6yYp62l0wHFm6YDoFgcEg31d',
                amount: amount * 100,
                currency: "INR",
                name: 'Ocassion_Oracle',
                handler: (res) => {
                    // alert(res.razorpay_payment_id)
                    MySwal.fire('Party Arranged!', 'Your party has been successfully arranged.', 'success');
                      toggleModal();
                },
                prefill: {
                    name: 'Sanjeevi',
                    email: '727721eucs134@skcet.ac.in',
                    contact: '9445984466'
                },
                notes: {
                    address: " office",
                },
                theme: {
                    color: '#f5f5f7'
                }
            };
            const pay = new window.Razorpay(options);
            pay.open();
        }
        else {
            alert("invalid amount")
        }

    }
    const handleArrangeParty = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: 'Do you want to arrange the party?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, arrange it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {

                openPayment();
               
              

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                MySwal.fire('Cancelled', 'Your party arrangement is cancelled.', 'error');
                toggleModal();
            }
        });
    };
    return (
        <div className={`${isDarkmode ? "dark" : ""}`}>
            <Navbar />
            <div className='w-full  h-full dark:bg-mine'>
                <div className="bg-gray-50 dark:bg-m2">
                    <div className="py-12 lg:py-24">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl dark:text-purple-500 font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                            {selectedDescription}
                                        </h1>
                                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                            A vibrant and festive birthday party description page with a colorful birthday theme picture as the
                                            hero image. The theme is centered around a fun and playful atmosphere, with decorations such as
                                            balloons, streamers, and confetti. The page describes how the theme sets the tone for an unforgettable
                                            celebration, creating a joyful and energetic ambiance for guests of all ages.
                                        </p>
                                    </div>
                                    <div className="grid gap-2 py-4">
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-300">Birthday Theme</div>
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-300">Celebration</div>
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-300">Festive</div>
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-300">Fun</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src={selectedImage}
                                        width="600"
                                        height="335"
                                        alt="Image"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-b border-gray-200 dark:border-gray-800">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_350px] xl:gap-16">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold tracking-tight dark:text-purple-400">Let the Festivities Begin</h3>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                            In addition to the lively decorations, the page highlights the delicious and enticing food options
                                            available at the party. From mouthwatering birthday cake to a variety of savory snacks and finger
                                            foods, guests can indulge in a delectable spread that caters to different tastes and dietary
                                            preferences. The description emphasizes the quality and presentation of the food, promising a
                                            delightful culinary experience for everyone attending.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid gap-4 lg:gap-8">
                                    <div className="rounded-lg bg-card border dark:text-white text-card-foreground shadow-sm" data-v0-t="card">
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Birthday Cake</h3>
                                            <p className="text-sm text-muted-foreground">Indulge in a sweet treat.</p>
                                        </div>
                                        <div className="p-0">
                                            <img
                                                src={cakeimage}
                                                width="400"
                                                height="225"
                                                alt="Image"
                                                className="aspect-video object-cover rounded-t-lg"
                                            />
                                        </div>
                                    </div>
                                    <div className="rounded-lg dark:text-white border  bg-card text-card-foreground shadow-sm" data-v0-t="card">
                                        <div className="flex flex-col space-y-1.5 p-6">
                                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Party Snacks</h3>
                                            <p className="text-sm text-muted-foreground">Delicious bites for every palate.</p>
                                        </div>
                                        <div className="p-0">
                                            <img
                                                src={partysnack}
                                                width="400"
                                                height="225"
                                                alt="Image"
                                                className="aspect-video object-cover rounded-t-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container px-4 md:px-6">
                        <div className="flex  flex-col gap-2 max-w-[400px] mx-auto py-6">
                            <button onClick={toggleModal}
                                className="inline-flex dark:bg-purple-500 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-xl px-8">
                                Book now
                            </button>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white dark:bg-m2 dark:text-white p-6 rounded-lg max-w-xl w-full">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto" data-v0-t="card">
                                <div className="flex-col space-y-1.5 p-6 flex items-center space-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <h3 className="font-semibold whitespace-nowrap tracking-tight text-sm">Birthday Party Arrangement Form</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="grid grid-cols-1 gap-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="name"
                                            >
                                                Name
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="name"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="birthday-date"
                                            >
                                                Birthday Date
                                            </label>
                                            <input
                                                className="flex  h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="birthday-date"
                                                placeholder="Select your birthday date"
                                                type="date"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="people-attending"
                                            >
                                                People Attending
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="people-attending"
                                                placeholder="Enter the number of people attending"
                                                type="number"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 gap-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="food-preference"
                                            >
                                                Food Preference
                                            </label>
                                            <select
                                                className="flex dark:bg-mine h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="food-preference"
                                            // value={foodPreference}
                                            // onChange={(e) => setFoodPreference(e.target.value)}
                                            >
                                                <option value="">Select food preference</option>
                                                <option value="vegetarian">Vegetarian</option>
                                                <option value="vegan">Vegan</option>
                                                <option value="non-vegetarian">Non-Vegetarian</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2">
                                            <label
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="food-preference"
                                            >
                                                Addon Preference
                                            </label>
                                            <select
                                                className="flex dark:bg-m2 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="food-preference"
                                            // value={AddonPreference}
                                            // onChange={(e) => setFoodPreference(e.target.value)}
                                            >
                                                <option value="">Select add-ons</option>
                                                <option value="balloons">Balloons</option>
                                                <option value="streamers">Streamers</option>
                                                <option value="confetti">Confetti</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center p-6">
                                    <button
                                        onClick={toggleModal}
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-300 h-10 px-4 py-2 ml-auto"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={handleArrangeParty}
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-300 h-10 px-4 py-2 ml-4"
                                    >
                                        Arrange party
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}


