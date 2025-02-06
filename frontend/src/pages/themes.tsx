import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/images/halloween-theme.jpg";
import city2 from "../assets/images/dino-theme.jpg";
import city3 from "../assets/images/enchanted-forest-theme.jpg";
import planet1 from "../assets/images/classic-theme.jpg";
import planet2 from "../assets/images/enchanted-forest-theme.jpg";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useNavigate } from "react-router-dom";
import "../assets/css/theme-repeator.css"
import RootState from "../redux/store";
import { useJwt } from "react-jwt";
import { toast } from "sonner";
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import axios from "axios";
interface ThemesProps {
    isDarkmode: boolean;
}
const Themes: React.FC<ThemesProps> = ({ isDarkmode }) => {
    const token = sessionStorage.getItem('jwtToken');
    const email = sessionStorage.getItem('Email');
    const [images, setImages] = useState<string[]>([]);
    const [descriptions, setDescriptions] = useState<string[]>([]);
    const navigate = useNavigate();

    const [themeData, setThemeData] = useState<Array<{ image: string; description: string }>>([]);
    useEffect(() => {
        const decodeToken = (token) => {
            if (!token) {
                navigate("/");
                toast.error("Credentials Required!");
                return null;
            }

            try {
                const payloadBase64 = token.split('.')[1];
                const decodedToken = JSON.parse(atob(payloadBase64));
                const isTokenValid = decodedToken && decodedToken.exp > Math.floor(Date.now() / 1000);
                const role = Cookies.get('role');
                if (!isTokenValid) {
                    navigate("/");
                    toast.error("Invalid Token!");
                    return null;
                }
                if (role !== "USER") {
                    navigate("/*");
                    toast.error("Invalid Access!");
                    return null;
                }
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
            // Saptu Sainthiram vanthu yoosikalam 💤
        }
    }, [token]);

    const handleImageClick = (index: number) => {
        console.log(`Clicked on image ${index}`);
        const selectedImage = images[index];
        const selectedDescription = descriptions[index];
        console.log(selectedDescription);
        navigate(`/theme/${index}`, { state: { selectedImage, selectedDescription } });
    };



    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {

        const storedDarkMode = localStorage.getItem("isDarkmode");

        if (storedDarkMode !== null) {
            setDarkMode(JSON.parse(storedDarkMode));
        }
    }, [darkMode]);

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });

    };

    const handleKeyboardNavigation = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            handleNext();
        } else if (event.key === "ArrowLeft") {
            handleBack();
        }
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/admin/get/themes");
                setThemeData(response.data);
                console.log(response.data);
                const themes = response.data.map((theme) => ({
                    image: theme.themeImageURL,
                    description: theme.themeName,
                }));
                setThemeData(themes);
                const themeImages = themes.map((theme) => theme.image);
                setImages(themeImages);
                const themeDes = themes.map((theme) => theme.description);
                setDescriptions(themeDes);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboardNavigation);
        return () => {

            document.removeEventListener("keydown", handleKeyboardNavigation);
        };

    }, []);

    // const images = [city1, city2, city3, planet1, planet2];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5, transition: { duration: 0.5 } },
        left1: { x: "-50%", scale: 0.7, zIndex: 3, transition: { duration: 0.5 } },
        left: { x: "-90%", scale: 0.5, zIndex: 2, transition: { duration: 0.5 } },
        right: { x: "90%", scale: 0.5, zIndex: 1, transition: { duration: 0.5 } },
        right1: { x: "50%", scale: 0.7, zIndex: 3, transition: { duration: 0.5 } },
    };

    // const descriptions = [
    //     "Halloween Theme",
    //     "Dino Theme",
    //     "Enchanted Forest Theme",
    //     "Classic Theme",
    //     "Enchanted Forest Theme",
    // ];


    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleImageHover = (index: number) => {
        setHoveredIndex(index);
    };


    // console.log(token);

    // console.log(isDarkmode);
    return (
        <>
            <Navbar />
            <div className={`${isDarkmode ? 'dark' : ''} `}>
                <div className="dark:bg-m2">
                    <div className="flex  mr-[37.5rem] items-center flex-col justify-center dark:bg-m2 h-screen">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => handleImageClick(index)}
                                onMouseEnter={() => handleImageHover(index)}
                                onMouseLeave={() => handleImageHover(null)}
                                style={{ display: "block" }}
                            // className="image-button"
                            // style={{ width: "40%", position: "absolute", border: "none", padding: 0, background: "none" }}
                            >
                                <motion.img
                                    key={index}
                                    src={image}


                                    className="rounded-[12px]"
                                    initial="center"
                                    animate={positions[positionIndexes[index]]}
                                    variants={imageVariants}
                                    // whileHover={{ scale: 0.8 }}
                                    // transition={{ duration: 0.5 }}
                                    style={{ width: "40%", position: "absolute" }}
                                />
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="text-purple-500 mt-4  absolute bottom-1 left-0 right-0 bg-transparent p-2  z-[1]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {descriptions[index]}
                                    </motion.div>
                                )}
                            </button>
                        ))}

                        <button
                            className="text-white mt-[400px] rounded-md py-2 px-4"
                            onClick={handleBack}
                        >

                        </button>
                        <button
                            className="text-white mt-[207px] ml-[56%]    rounded-md py-2 px-4"
                            onClick={handleNext}
                        >

                        </button>
                    </div>
                </div>
            </div>
            {/* <div>
                <div onMouseMove={(e) => { imgbox_hover(e) }} className="imagebox" style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.sYNQ9cIfj2EVnXF4SI--gwHaFj?w=1024&h=768&rs=1&pid=ImgDetMain')` }}>
                    <h1>Testing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit numquam maxime ea recusandae. Facere velit quasi cupiditate, ipsa quas impedit veritatis, harum id quod molestiae ut fugit blanditiis tempora placeat.</p>
                </div>
                <div className="imagebox" style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.sYNQ9cIfj2EVnXF4SI--gwHaFj?w=1024&h=768&rs=1&pid=ImgDetMain')` }}>
                    <h1>Testing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit numquam maxime ea recusandae. Facere velit quasi cupiditate, ipsa quas impedit veritatis, harum id quod molestiae ut fugit blanditiis tempora placeat.</p>
                </div>
                <div className="imagebox" style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.sYNQ9cIfj2EVnXF4SI--gwHaFj?w=1024&h=768&rs=1&pid=ImgDetMain')` }}>
                    <h1>Testing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit numquam maxime ea recusandae. Facere velit quasi cupiditate, ipsa quas impedit veritatis, harum id quod molestiae ut fugit blanditiis tempora placeat.</p>
                </div>
            </div> */}
            <Footer />
        </>
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        isDarkmode: state.isDarkmode, // Replace with your actual reducer name
    };
};
export default connect(mapStateToProps)(Themes);