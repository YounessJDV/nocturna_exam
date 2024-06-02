import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';  // Importer le contexte d'authentification

import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { RiAccountBoxFill } from "react-icons/ri";
import LogoImg from '../img/navbar/nav_logo.png'
import phoneIcon from '../img/navbar/phone.png'

function scrollToScrollTest() {
    const scrolltest = document.getElementById('scrolltest');
    if (scrolltest) {
        scrolltest.scrollIntoView({ behavior: 'smooth' });
    }
}

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [hamburgerBefore, setHamburgerAfter] = useState(false);
    const { isLoggedIn, logout } = useAuth();  // Utiliser le contexte d'authentification

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        setHamburgerAfter(!hamburgerBefore);
        document.body.classList.toggle('lock-scroll');
    };

    return (

        <div className="navbar bg-white dark:bg-black border-b-2 border-gray dark:border-black"> 

            <header className="w-5/6 mx-auto py-4">
                <nav className="y-4 md:px-8 px-4">
                    <div className="flex flex-row items-center place-content-between">

                        {/*My logo*/}
                        <div className="md:w-1/3 logo">
                            <Link to="/" onClick={scrollToScrollTest}>
                                <img className="h-12 dark:invert hover:cursor-pointer" src={LogoImg} alt="logo"></img>
                            </Link>
                            
                        </div>

                        {/*for larger devices*/}
                        <div className="w-1/3 justify-center lg:flex font-medium items-center gap-3 hidden">
                            <Link to="/" className="block hover:text-gray-400 dark:text-white py-2 px-1 xl:px-4 transition duration-300 hover:text-black/75">Création de site web</Link>
                            <Link to="/contact" className="block hover:text-gray-400 dark:text-white py-2 px-1 xl:px-4 transition duration-300 hover:text-black/75">Contact</Link>
                            {/* <a href="/" className="block hover:text-gray-400 py-2 px-1 xl:px-4">FAQ</a> */}
                        </div>
                        
                        {/*Contact me btn*/}
                        <div className="w-1/3 justify-end lg:flex hidden">
                            {/* <div className="flex items-center mx-5">
                                <img className="h-10 mx-2" src={phoneIcon} alt="logo"></img>
                                <div className="items-center text-sm">
                                    <p className="font-semibold text-black dark:text-white">Appelez-nous</p>
                                    <a href="tel:+33781905192" className="font-medium text-gray-500 dark:text-white hover:cursor-pointer">07 81 90 51 92</a>
                                </div>
                            </div> */}
                            <Link to="/contact" className="btnOutline ml-5">
                                Contact
                            </Link>
                            {isLoggedIn ? (
                                <Link to="/logout" className="btnOutline ml-4" onClick={logout}>
                                Déconnexion
                                </Link>
                            ) : (
                                <Link to="/login" className="btnOutline ml-4">
                                Connexion
                                </Link>
                            )}
                            {isLoggedIn ? (
                                <Link to="/dashboard" className="btnOutline ml-4 flex items-center">
                                    <RiAccountBoxFill />
                                </Link>
                            ) : null}

                        </div>

                        {/*Open small menu btn*/}
                        <button onClick={toggleMenu} className="lg:hidden text-indigo-600 dark:text-white text-3xl">
                            <BiMenuAltRight  className={`hamburger ${hamburgerBefore ? 'menu_hamburger_rotate' : ''}`} />
                        </button>

                    </div>
                </nav>
            </header>



            <div className={`lg:hidden flex flex-col sm-menu w-full h-full mx-0 p-3 bg-black text-white ${menuVisible ? 'menu_visible' : ''}`}>
                
                <button onClick={toggleMenu} className=" p-5 text-3xl flex justify-end">
                    <BiX/>
                </button>
                
                <div className="text-center">
                    {/* <a href="/" className="block hover:text-gray-400 py-2">Accueil</a> */}
                    <Link to="/" onClick={toggleMenu} className="block hover:text-gray-400 py-2">Création de site web</Link>
                    <Link to="/contact" onClick={toggleMenu} className="block hover:text-gray-400 py-2">Contact</Link>
                </div>
{/* 
                <div className="flex flex-col items-center overflow-hidden mt-5 py-3 bg-white rounded-lg">
                    <div className="flex items-center mt-0 mb-2 space-x-2">
                        <img className="h-10 mx-0 px-0" src={phoneIcon} alt="logo"></img>
                        <div className="items-center text-sm font-semibold">
                            <p className="text-black">Appelez-nous</p>
                            <a href="tel:+33781905192" className="text-gray-500 hover:cursor-pointer">07 81 90 51 92</a>
                        </div>
                    </div>

                    <button className="btnOutline my-0">
                        Contact
                    </button>
                </div> */}

                <div className="flex justify-center">
                    <Link to="/" onClick={toggleMenu}>
                        <img className="h-12 my-12 invert" src={LogoImg} alt="logo"></img>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar;