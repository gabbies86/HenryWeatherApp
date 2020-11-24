import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false)
    }, 10000);
  }, []);

  const show = <div className='mainText'>
      <h2>Ingresa el nombre de una ciudad y ve el clima en este momento</h2>
    </div>

  return (
    <div className='container'>
    </div>
  );
}
