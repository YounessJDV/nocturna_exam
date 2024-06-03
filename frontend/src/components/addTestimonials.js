import React, { useState } from 'react';

const AddTestimonial = ({ onPost }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onPost(message);
      setMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-6 p-4 shadow-lg rounded-lg dark:bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full h-24 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 dark:bg-gray-100"
            placeholder="Écrivez votre avis ici..."
            value={message}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
          >
            Poster
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTestimonial;
