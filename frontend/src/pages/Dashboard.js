// Dashboard.js
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur : ', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-screen">
        {userData ? (
          <div class="mb-5">
            <div class="flex justify-center">
              <p class="inter text-3xl md:text-5xl text-center">Bonjour <span class="font-bold">{userData.username}</span>, comment allez-vous ?</p>
            </div>
          </div>
        ) : (
          <p>Chargement en cours...</p>
        )}
        <div className="my-5">
          <Link to="/" className="btnOutline my-5 mx-5">
            Accueil
          </Link>
          {userData && userData.username === 'admin' && (

          <Link to="/ajoutprojet" className="btnOutline my-5 mx-5">
            Ajouter une réalisation
          </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;