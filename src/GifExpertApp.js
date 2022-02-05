import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {

  const [categories, setCategories] = useState(['Naruto'])

  return (
    <>
      <h2>Buscador de Gif en GIPHY - GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      <ol>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category} />
          )
        }
      </ol>
    </>
  );
}


