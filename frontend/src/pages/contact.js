import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';

import emailjs from '@emailjs/browser';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import CtaContact from '../components/cta_contact'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'



function Contact() {
    const form = useRef();
    const [valeurBtn, setValeurBtn] = useState("Envoyer");
    const [btnClass, setBtnClass] = useState("bg-[#45008b] px-8"); // état pour la classe du bouton
    const [loadingVisible, setLoadingVisible] = useState(false); // État pour la visibilité de l'icône de chargement

    const sendEmail = (e) => {
        e.preventDefault();

        // Changer la valeur du bouton en "Envoi en cours..."
        setValeurBtn("Envoi en cours...");
        setBtnClass("bg-gray-600 pr-8"); //
        setLoadingVisible(true); // Afficher l'icône de chargement lors de l'envoi en cours
        

        emailjs
            .sendForm('service_npe95yw', 'template_fdj4ktg', form.current, {
                publicKey: 'EddJzMQuK4b7vD0iJ',
            })
            .then(
                () => {
                    // Après 1 secondes, changer la valeur du bouton en "Envoyé"
                    setTimeout(() => {
                        setValeurBtn("Envoyé");
                        setBtnClass("bg-[#008000] px-8");
                        setLoadingVisible(false); // Masquer l'icône de chargement après l'envoi réussi
                        // Après 2 secondes, revenir à la valeur initiale "Envoyer"
                        setTimeout(() => {
                            setValeurBtn("Envoyer");
                            setBtnClass("bg-[#45008b] px-8");
                            form.current.reset(); // Réinitialiser les champs du formulaire
                        }, 1000);
                    }, 1000);
                    // console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    
  return (

    <div>
        <Helmet>
            <title>Contactez-nous</title>
            <meta name="description" content="N'hésitez pas à nous contacter pour toute demande d'information ou de devis." />
        </Helmet>
        <Navbar />

        <section className="text-gray-700 body-font relative" data-aos="fade-up" data-aos-duration="800">
            <div className="container px-0 lg:px-5 pt-24 pb-16 md:py-24 mx-auto">
                <div className="flex flex-col w-full xl:w-2/3 mx-auto text-center mb-12">
                    <h1 className="font-extrabold text-4xl sm:text-5xl leading-8 tracking-tight text-gray-900 dark:text-white">
                        <span className="offre-titre-contact poppins">Contactez-nous</span>
                    </h1>
                    <p className=" mt-8 mx-auto leading-relaxed text-base sm:text-lg">
                        Pour obtenir un devis sur votre projet ou toute autre information, remplissez le formulaire suivant. Nous vous contacterons par la suite pour répondre à votre demande. 
                    </p>
                </div>
                
                <div className="w-full xl:w-2/3 mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label for="user_surname" className="leading-7 text-sm text-gray-600">
                                Nom<span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                id="user_surname"
                                name="user_surname"
                                required="required"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label
                                for="user_name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Prénom<span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                required="required"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                E-mail<span className="text-red-600"> *</span>
                            </label>
                            <input
                                type='email'
                                id="user_email"
                                name="user_email"
                                required="required"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_tel"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Téléphone<span className="text-red-600"> *</span>
                            </label>
                            <input
                                type='tel'
                                id="user_tel"
                                name="user_tel"
                                pattern="[\d. ]{1,14}"
                                required="required"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_ville"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Ville
                            </label>
                            <input
                                type='text'
                                id="user_ville"
                                name="user_ville"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="user_choix_projet"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Votre projet <span className="text-red-600"> *</span>
                            </label>
                            <select
                                id="user_choix_projet"
                                name="user_choix_projet"
                                required="required"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            >
                                <option value="">Sélectionnez...</option>
                                <option value="Site web Standard">Site web standard</option>
                                <option value="Site web Premium">Site web premium</option>
                                <option value="Autre projet">Autre</option>
                            </select>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                for="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message<span className="text-red-600"> *</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required="required"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            
                            <button type="submit" className={`
                                ${btnClass}
                                flex justify-center items-center
                                transform transition duration-500 
                                sm:hover:scale-105 
                                sm:hover:cursor-pointer 
                                flex mx-auto text-white border-0 py-2 focus:outline-none sm:hover:bg-[#45008b]/90 rounded text-lg poppins`}>

                                {loadingVisible && <AiOutlineLoading3Quarters className="fill-white h-5 w-5 mx-5 animate-spin" />}
                                {valeurBtn}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>

        <CtaContact />
        <Footer />
    </div>

    
    );
  }
  
  export default Contact;