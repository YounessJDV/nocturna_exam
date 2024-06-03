import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function AjoutProjet() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:4000/api/realisations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Projet ajouté avec succès', response.data);
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du projet', error);
    }
  };


  return (
    <>
      <Navbar/>
      <div class="flex content-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
          <h1 class="text-center text-2xl font-bold text-[#45008b] sm:text-3xl">Page d'ajout de projet :</h1>

          <form onSubmit={handleSubmit} class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p class="text-center text-lg font-medium">Ajoutez un projet ici</p>

            <div>
              <label for="name" class="sr-only">Nom</label>
              <div class="relative">
                <input
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Nom du projet"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label for="description" class="sr-only">Password</label>
              <div class="relative">
                <input
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            </div>

            <div>
              <label for="description" class="sr-only">Password</label>
              <div class="relative">
                <input
                  type="file"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" 
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            </div>

            <button
              type="submit"
              class="block w-full rounded-lg bg-[#45008b] px-5 py-3 text-sm font-medium text-white"
            >
              GO
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
