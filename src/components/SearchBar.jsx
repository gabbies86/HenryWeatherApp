import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input className='input'
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className='arrow' type="submit" value="Buscar" />
    </form>
  );
}
