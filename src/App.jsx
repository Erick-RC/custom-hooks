import React from 'react';
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';
import { Otro } from './components/Otro.jsx';

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">App de Gatitos</h1>

      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Obtener nuevo hecho
      </button>

      {fact && (
        <p className="text-lg my-4">{fact}</p>
      )}
      {imageUrl && (
        <div className="my-4">
          <img className="max-w-xs mx-auto" src={imageUrl} alt={`Imagen extraída utilizando las primeras tres palabras de ${fact}`} />
        </div>
      )}
    </main>
  );
}

export default App;
