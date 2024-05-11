'use client';
import React from 'react';

export default function IMC() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState('');

  function handleClick() {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <label htmlFor="peso">Peso (em kg)</label>
      <input
        id="peso"
        name="peso"
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <label htmlFor="altura">Altura (em cm)</label>
      <input
        id="altura"
        name="altura"
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={handleClick}>Calcular</button>
      <p>IMC: {imc}</p>
    </div>
  );
}
