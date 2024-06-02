import { HashRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";
import LogoImg from '../img/navbar/nav_logo.png'

function scrollToScrollTest() {
    const scrolltest = document.getElementById('scrolltest');
    if (scrolltest) {
        scrolltest.scrollIntoView({ behavior: 'smooth' });
    }
  }

function Footer() {
    return (
        <footer className="flex flex-col bg-gradient-to-t from-[#45008B] to-[#63179C] poppins pt-12">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-16 flex flex-col justify-center md:flex-row md:justify-between gap-12">
                    <div className="w-full md:w-1/3">
                                <Link to="/" onClick={scrollToScrollTest}>
                                    <img className="h-12 invert transition ease-in-out duration-200 hover:opacity-85" src={LogoImg} alt="logo"></img>
                                </Link>
                                <p className="w-10/12 mt-3 md:mt-6 text-sm text-white">
                                Nocturna, votre partenaire de confiance pour
                                la transformation digitale et la croissance de
                                votre entreprise. En tant qu'agence spécialisée,
                                nous sommes dédiés à fournir des solutions
                                innovantes pour propulser votre présence en 
                                ligne et booster vos résultats.
                                </p>
                    </div>

                    <div className="w-full md:w-1/3 sm:text-left">
                        <p className="text-lg font-medium text-white py-2">NOS SERVICES</p>

                        <ul className="mt-2 md:mt-6 space-y-4 text-sm">
                            <li><p className="text-white">Développement Web</p></li>

                            <li><p className="text-white">Création de site web vitrine</p></li>

                            <li><p className="text-white">Création d’identité visuelle</p></li>

                            <li><p className="text-white">Logo & Design</p></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 sm:text-left">
                        <p className="text-lg font-medium text-white py-2">CONTACTEZ-NOUS</p>
                        <ul className="mt-2 md:mt-6 space-y-4 text-sm">
                            <li className="text-white"> Mail : <a  className="text-white transition hover:text-white/75" href="mailto:contact@nocturna-agency.com">contact@nocturna-agency.com</a></li>
                            {/* <li className="text-white">Téléphone : <a className="text-white transition hover:text-white/75" href="tel:+33781905192">07 81 90 51 92</a></li> */}
                            <li><Link to="/contact" className="text-white transition hover:text-white/75"> Contact </Link></li>
                        </ul>
                    </div>
                </div>

            <div className='w-full md:w-5/6 mx-auto border-t-2 border-gray'></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:w-5/6 mx-auto my-6 px-4 md:px-0 text-white">
                    <div className="text-center text-sm  my-4 order-last sm:mb-0 sm:order-first sm:text-left">© Copyright nocturna-agency.com</div>
                    <Link to="/mentionsLegales"  className="text-center order-first sm:order-last sm:text-right md:text-none text-white transition hover:text-white/75">Mentions Légales</Link>
            </div>
        </footer>
    )
}

export default Footer;
