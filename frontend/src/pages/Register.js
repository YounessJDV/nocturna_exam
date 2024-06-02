import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import LogoImg from '../img/navbar/nav_logo.png'



const Register = () => {
    const [formData, setFormData] = useState({
      email: '',
      username: '',
      password: ''
    });

    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/register', formData);
        console.log(response.data); // Afficher la réponse du serveur (par exemple, "Utilisateur inscrit avec succès")
        // Rediriger l'utilisateur vers la page de connexion
        navigate('/login');

      } catch (error) {
        console.error('Erreur lors de l\'inscription : ', error);
      }
    };
  
    return (
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="h-12 dark:invert hover:cursor-pointer" src={LogoImg} alt="logo"></img>
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Inscription
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@nocturna.fr" required />
                        </div>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identifiant</label>
                            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identifiant" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-[#45008B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">S'inscrire</button>                     
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Déjà un compte ? -
                        <Link to="/login">
                          &nbsp;<span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Connectez-vous</span>
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Register;
