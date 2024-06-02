
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";



function CtaContact() {
    return (
        <div className="cta w-5/6 md:4/5 lg:w-4/5 xl:w-2/3 mx-auto mt-0 md:mt-8 rounded-3xl shadow-lg bg-[#45008B] dark:bg-gray-800 poppins">
            <div className="grid md:grid-cols-3 place-content-center content-center py-8 px-4 sm:px-6 lg:py-12 lg:px-8 z-20">
                
                    <div className="flex flex-col items-center justify-center">
                        <RiTeamFill className="w-12 h-12 md:w-24 md:h-24 fill-white"/>
                        <p className="mt-2 lg:mt-4 mb-4 text-center text-md md:text-md lg:text-xl font-medium text-white">
                            Expertise 
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <TfiHeadphoneAlt className="w-12 h-12 md:w-24 md:h-24 fill-white"/>
                        <p className="mt-2 lg:mt-4 mb-4 text-center text-md md:text-md lg:text-xl font-medium text-white">
                            Service client réactif
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <IoMdCheckmarkCircleOutline className="w-12 h-12 md:w-24 md:h-24 fill-white"/>
                        <p className="mt-2 lg:mt-4 mb-4 text-center text-md md:text-md lg:text-xl font-medium text-white">
                            Satisfaction garantie
                        </p>
                    </div>

            </div>
        </div>
    )
}

export default CtaContact;