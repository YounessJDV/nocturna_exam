
import { HashRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";

function Cta() {
    return (
        <div className="cta w-5/6 md:4/5 lg:w-4/5 xl:w-2/3 mx-auto mt-8 rounded-3xl shadow-lg bg-[#45008B] dark:bg-gray-800 poppins">
            <div className="text-center w-full lg:w-4/5 mx-auto text-white dark:text-white py-8 px-4 sm:px-6 lg:py-12 lg:px-8 z-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 sm:text-4xl">
                    <span className="block">
                        Vous avez un projet ? Parlez-nous en !
                    </span>
                </h2>
                <p className="text-sm md:text-lg">
                    Vous êtes intéressé par la création d’un site web pour votre activité ? Contactez-nous pour en discuter et obtenir un devis dans les plus bref délais. 
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <Link to="/contact" className="py-3 px-7 bg-white hover:bg-slate-200 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-full transition ease-in duration-200 text-center text-md md:text-md font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md " >CONTACT</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta;