import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const Fruits = () => {
  const fruits = [
  "Apple",
  "Pineapple",
  "Peach",
  "Pear",
  "Banana",
  "Mango",
  "Orange",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
  "Grapes",
  "Pomegranate",
  "Cherry",
  "Guava",
  "Dragon Fruit",
  "Avocado",
  "Coconut",
  "Lemon",
  "Lime",
  "Plum",
  "Apricot",
  "Blackberry",
  "Cantaloupe",
  "Jackfruit",
  "Lychee",
  "Passion Fruit",
  "Fig",
  "Cranberry",
  "Tangerine",
  "Grapefruit",
  "Persimmon",
  "Star Fruit"
];
  const [search, setSearch] = useState('');

  const searchedFruit = useMemo(() => {
    return fruits.filter((fruit) => fruit.toLowerCase().includes(search.toLowerCase()))
  },[search])

  return (
    <div>
      <h2>Fruits Search 🍍🍎🍓🍇</h2>
      <input type="text" placeholder='Search your favourite fruit..' value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
      {search.trim() !== '' && (
        <div>
          {searchedFruit.length > 0 ? (
            <div>
              {searchedFruit.map((fruit, index) => (
                <p key={`${fruit} - ${index}`}>{fruit}</p>
              ))}
            </div>
          ) : 
          (<p>No Fruit found</p>)}
        </div>
      )}
    </div>
  )
}

export default Fruits
