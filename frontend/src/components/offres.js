import { Link } from "react-router-dom";


export const Offres = () => {
    return (
      <div className="bg-gradient-to-b from-white to-[#EAEAEA]">
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 poppins" data-aos="zoom-in" data-aos-duration="1300">
          <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
            <p className="text-base font-semibold leading-6 text-[#45008B] uppercase mb-2">
              lancez-vous
            </p>
            <h2 className="max-w-lg mb-6 font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white text-3xl sm:text-4xl mx-auto">
                <span className="offre-titre-after">L'offre de Nocturna</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Un site web adapté à vos besoins, c’est ce que nous avons de mieux à offrir chez <span class="font-bold">Nocturna</span>.
              Choisissez une de nos offres et propulsez votre présence en ligne.
            </p>
          </div>
          <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 mx-auto">
            <div className="flex flex-col w-full justify-between p-5 bg-white border rounded-xl shadow-sm">
              <div className="mb-6">
                <div className="flex items-center justify-center pb-6 mb-6 border-b">
                  <div>
                    <p className="mb-5 text-2xl font-bold tracking-wider uppercase">
                      Site vitrine STANDARD
                    </p>
                    {/* <p className="my-2 text-5xl font-extrabold">Devis</p> */}
                    <p>Site internet d’une page intuitif, performante et au meilleur tarif.</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-bold tracking-wide">Options</p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">
                        Site <span className="font-bold">une page</span> complet
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Pack visuel inclus (logo & flyer)</p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Design visuel <span className="uppercase">Standard</span></p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Reponsive design (smartphone & tablette)</p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Formulaire de contact inclus</p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Livraison entre <span className="font-bold">2 à 5 jours</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-[#45008B] rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  DEVIS GRATUIT
                </Link>
                {/* <p className="text-sm text-gray-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p> */}
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 bg-white border rounded-xl shadow-sm">
              <div className="mb-6">
                <div className="flex items-center justify-center pb-6 mb-6 border-b">
                  <div>
                    <p className="mb-5 text-2xl font-bold tracking-wider uppercase">
                      Site vitrine PREMIUM
                    </p>
                    {/* <p className="my-2 text-5xl font-extrabold">Devis</p> */}
                    <p>Site internet multi-pages intuitif, performante et au meilleur tarif.</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-bold tracking-wide">Options</p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">
                        Site <span className="font-bold">multi-page</span> complet
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Pack visuel inclus (logo & flyer)</p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Design visuel PREMIUM</p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Responsive design (smartphone & tablette)</p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Formulaire de contact inclus</p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-[#45008B]"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-800">Livraison entre <span className="font-bold">5 à 7 jours</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-[#45008B] rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  DEVIS GRATUIT
                </Link>
                {/* <p className="text-sm text-gray-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Offres;