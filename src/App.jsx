import { useEffect, useState } from 'react';
import Cafe from './cafe.jsx';

export default function App() {
  const [cafes, setCafes] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setCafes(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Cafés quentes</h1>
      {cafes.map((cafe) => (
      <Cafe
        key={cafe.id}
        title={cafe.title}
        description={cafe.description}
        ingredients={cafe.ingredients}
        image={cafe.image}
      />
    ))}
    </div>
  );
}