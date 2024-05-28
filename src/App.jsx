import React, { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat';

function App() {
  const [fact, setFact] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() =>{
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ');
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response;
        setImageUrl(url);
      });
  })

  return (
    <main className="flex flex-col items-center font-sans">
      <h1 className="text-3xl font-bold mb-8">App de Gatitos</h1>
      {fact && <p className="text-lg mb-4">{fact}</p>}
      <img className="max-w-sm rounded-lg" src={CAT_PREFIX_IMAGE_URL} alt={`Image extracted using the first three words of fact: ${fact}`} />
    </main>
  );
}

export default App;
