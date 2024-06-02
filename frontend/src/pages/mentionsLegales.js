import { Helmet } from 'react-helmet';

import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

function MentionsLegales() {
  return (

    <div>
        <Helmet>
            <title>Mentions Légales</title>
            <meta name="description" content="N'hésitez pas à nous contacter pour toute demande d'information ou de devis." />
        </Helmet>
        <Navbar /> 
    
        <div className="w-5/6 md:w-3/4 mx-auto bg-[#EAEAEA] rounded-3xl px-10 py-3 my-10 shadow-md" data-aos="fade-up" data-aos-duration="800">



            <div className="text-center">
                <h1 className="text-3xl sm:text-5xl text-[#45008B] font-bold mt-10 mb-2 poppins">Mentions Légales</h1>
                <p className="mb-10 sm:mb-20 font-semibold text-lg text-gray-600 poppins">De <span className="text-[#45008B]">Nocturna</span></p>
            </div>

            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Informations sur l'entreprise</h2>
                <p className="text-md poppins mt-2">
                <span className="font-semibold">Nom : </span>Nocturna Agency<br/>
                <span className="font-semibold">E-mail : </span> contact@nocturna-agency.com <br />
                <span className="font-semibold">Ville : </span> Strasbourg, Bas-Rhin 67000
                </p>
            </div>

            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Propriété intellectuelle</h2>
                <p className="text-md poppins mt-2">L’ensemble de ce site relève des législations françaises et internationales sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse et écrite de <span className="font-semibold">Nocturna Agency</span>.</p>
            </div>

            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Limitation de responsabilité</h2>
                <p className="text-md poppins mt-2">
                <span className="font-semibold">Nocturna Agency</span> ne saurait être tenu pour responsable des erreurs matérielles qui se seraient glissées dans les documents présents sur le site, malgré le soin apporté à leur publication. <span className="font-semibold">Nocturna Agency</span> ne garantit pas que le site soit exempt de défauts, d’erreurs ou d’omissions.                </p>
            </div>

            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Coordonnées de contact</h2>
                <p className="text-md poppins mt-2">
                Pour toute question ou demande d'information, veuillez nous contacter à l'adresse e-mail <span className="font-semibold">contact@nocturna-agency.fr</span>
                </p>
            </div>

            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Politique de confidentialité</h2>
                <p className="text-md poppins mt-2">
                Consultez notre politique de confidentialité pour obtenir des informations sur la manière dont nous collectons, utilisons, stockons et protégeons vos données personnelles.
                </p>
            </div>

            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Mentions légales pour le formulaire de contact</h2>
                <p className="text-md poppins mt-2">
                En soumettant ce formulaire, vous consentez à ce que Nocturna utilise les informations fournies pour répondre à votre demande.
                </p>
            </div>

            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Règlement général sur la protection des données (RGPD)</h2>
                <p className="text-md poppins mt-2">
                <span className="font-semibold">Nocturna Agency</span> est conforme au RGPD et s'engage à protéger les données personnelles de ses utilisateurs conformément à la législation en vigueur.
                </p>
            </div>
            
            <div className="my-10">
                <h2 className="text-2xl sm:text-2xl font-semibold poppins">Conditions d'utilisation</h2>
                <p className="text-md poppins mt-2">
                En utilisant ce site web, vous acceptez nos conditions d'utilisation, disponibles sur demande.
                </p>
            </div>
        </div>
    <Footer/>
    </div>
  );
}

export default MentionsLegales;