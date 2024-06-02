
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";


function Features() {
    return (

        <div id="apropos" className="sm:container sm:min-h-[calc(100vh-20vh)] flex flex-col justify-center mx-auto items-center p-6 px-6 bg-white dark:bg-gray-800 poppins" data-aos="fade-down" data-aos-duration="1300">
            <div className="mb-0 md:mb-6 text-center">
                <h2 className="text-base font-semibold tracking-wide text-[#45008B] uppercase">
                    Découvrez...
                </h2>
                <p className="mt-4 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Une agence à votre <span className="bg-gradient-to-r from-[#45008B] to-[#9953F3] inline-block text-transparent bg-clip-text">service</span>
                </p>
                <p className="w-4/5 sm:w-full mx-auto text-md md:text-lg my-3 leading-7 text-gray-500 dark:text-gray-300">
                    <span className="font-bold">Nocturna</span> vous propose la création de votre site web sur mesure.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-center flex">
                <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg md:w-3/4 lg:w-1/4 dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-[#45008B] rounded-md">
                        <FaEye width="20" height="20" className="w-6 h-6"/>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        Visibilité Maximale
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        Boostez votre visibilité en ligne avec des sites web percutants. Soyez présent 24/7 pour attirer de nouveaux clients.
                    </p>
                </div>
                <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg md:w-3/4 md:w-1/2 lg:w-1/4 lg:mt-24 dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-[#45008B] rounded-md">
                            <FaPencil width="20" height="20" className="w-6 h-6"/>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        Design Sur-Mesure
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        Distinguez-vous avec des designs professionnels et uniques. Chaque site est conçu pour refléter l'identité de votre entreprise.
                    </p>
                </div>
                <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg md:w-3/4  md:w-1/2 lg:w-1/4 dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-[#45008B] rounded-md">
                        <FaChartLine width="20" height="20" className="w-6 h-6"/>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        Performance Garantie
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        Des sites web optimisés pour une expérience utilisateur exceptionnelle. Augmentez vos conversions et faites croître votre entreprise.
                    </p>
                </div>
            </div>
        </div>
        
        
    )
}

export default Features;