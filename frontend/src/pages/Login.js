import React from 'react'
import { Link, Redirect} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { isLoggedIn } from '../contexts/Auth';
import { useAuth } from '../contexts/AuthContext';  // Importer le contexte d'authentification
import LogoImg from '../img/navbar/nav_logo.png';

function Login() {

    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
  
    const [redirect, setRedirect] = useState(false);
    const { login, isLoggedIn } = useAuth();

    useEffect(() => {
      // Vérifie si l'utilisateur est déjà connecté
      if (isLoggedIn) {
        setRedirect(true); // Définit redirect sur true pour rediriger l'utilisateur
      }
    }, [isLoggedIn]);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/login', formData);
        login(response.data.token); // Utilisez la fonction login du contexte pour mettre à jour l'état
        // Rediriger l'utilisateur vers une page protégée ou une autre page après la connexion réussie
        setRedirect(true);;
      } catch (error) {
        console.log('Erreur lors de la connexion. ');
        // Gérer les erreurs de connexion, par exemple afficher un message d'erreur à l'utilisateur
      }
    };

    if (redirect) {
      return <Navigate to="/dashboard" />; // Utilisation de Navigate pour rediriger vers '/dashboard'
    }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="h-12 dark:invert hover:cursor-pointer" src={LogoImg} alt="logo"></img>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Connectez-vous
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div>
                          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identifiant</label>
                          <input type="text" name="username" value={formData.username} onChange={handleChange} id="identifiant" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identifiant" required=""></input>
                      </div>
                      <div>
                          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                          <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                      </div>
                      {/* <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                              </div>
                              <div className="ml-3 text-sm">
                                <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                              </div>
                          </div>
                          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                      </div> */}
                      <button type="submit" className="w-full text-white bg-[#45008B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Connexion</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Pas encore de compte ? -
                      <Link to="/register">
                        &nbsp;<span className="font-medium text-primary-600 hover:underline dark:text-primary-500">S'inscrire</span>
                      </Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </div>
)
}

export default Login;