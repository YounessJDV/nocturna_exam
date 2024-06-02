import { Link } from "react-router-dom";

import { useState } from "react";
import imgFaq from '../img/faq/faq_illustration.png'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="my-6 bg-white rounded-xl shadow-lg poppins">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="w-5/6 text-left sm:text-md md:text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-10 h-10 transition duration-150 ease-in-out bg-gradient-to-r from-[#45008B] to-[#9953F3] md:hover:from-slate-900 md:hover:to-slate-900 duration:0 hover:duration-500 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-white transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="w-6/7 text-justify leading-7  p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
      <div className="bg-gradient-to-b from-[#EAEAEA] to-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 poppins" data-aos="fade-up" data-aos-duration="1300" data-aos-anchor-placement="top-bottom">
          <div className="max-w-2xl sm:mx-auto lg:max-w-3xl">
            <div className="flex flex-col mb-16 sm:text-center">

              <div className="mx-auto justify-items-center	sm:text-center lg:max-w-2xl">
                <img className="faqImgLg mx-auto" src={imgFaq} alt="illustration_faq"></img>
                <h2 className=" mb-0 text-center font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white text-3xl sm:text-4xl mx-auto">
                  <span className="faq-titre">
                    Foire aux questions
                  </span>
                </h2> 
              </div>

            </div>

            <div className="space-y-4">
              <Item title="Comment me lancer ?">
                Pour vous lancer dans la création de votre site web, contactez-nous par mail <Link to="/contact" className="text-black">ici</Link>.
              </Item>
              <Item title="Dois-je vous fournir les éléments pour mon site web ?">
              Nous vous recommandons de fournir les éléments texte et les images pour la création de votre site web afin de garantir une personnalisation optimale et une correspondance précise avec vos besoins et votre identité de marque. Cependant, si vous ne disposez pas de ces éléments, ne vous inquiétez pas ! Notre équipe est là pour vous guider à travers le processus et peut même créer le contenu pour vous, en nous basant sur vos instructions et vos préférences. Notre objectif est de rendre le processus aussi fluide et sans tracas que possible pour vous.
              </Item>
              <Item title="Quelles sont les différentes étapes ?">
                Les étapes seront définies en fonction de votre projet. Il existe cependant des étapes de base pour la création de votre site web : 
                <ul className="text-sm leading-7 mt-2">
                  {/* <li>- Prise en compte de votre <a target="blank" rel='noopener noreferrer' href="https://www.google.com">demande</a>.</li> */}
                  <li>- Prise en compte de votre demande.</li>
                  <li>- Création et proposition du devis.</li>
                  <li>- Paiement de l'acompte si le devis est validé et signé.</li>
                  <li>- Prise d'information sur le projet (nom, logo, thème et couleurs, etc...)</li>
                  <li>- Création et développement du site web</li>
                  <li>- Première présentation.</li>
                  <li>- Modifications.</li>
                  <li>- Deuxième présentation <span class="font-semibold">finale</span>.</li>
                  <li>- Mise en ligne et livraison du site web.</li>
                  <li>- Paiement des 75% restants du devis.</li>
                  <li className="text-xs mt-5">* Nous ne prenons pas en compte le prix du nom de domaine et de l'hébergement dans le devis.</li>
                </ul>
              </Item>
              <Item title="Comment se passe le paiement ?">
                Nous demandons un acompte de 25% pour programmer la création du site web. Nous acceptons les paiements par virement bancaire, en espèces mais aussi en cryptomonnaie.
                Les détails et les termes exacts seront fournis dans votre devis. Les 75% restants seront payés comptant à la livraison du site web.
              </Item>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Faq;