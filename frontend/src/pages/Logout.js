// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';  // Importer le contexte d'authentification

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();  // Utiliser le contexte d'authentification

  useEffect(() => {
    console.log('Déconnecté avec succès')
    logout();
    navigate('/login');
  }, [navigate, logout]);

  return null;
};

export default Logout;