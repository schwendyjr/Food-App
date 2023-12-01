import React from 'react';
import { useState } from 'react';
import foodData from '../data/data.json';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const { foodItems } = foodData;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedRecipe(null); // Reset selected food when searching
  };

  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRecipeClick = (id) => {
    const clickedRecipe = foodItems.find((item) => item.id === id);
    setSelectedRecipe(clickedRecipe);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to My Food App!</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <input
            type="text"
            placeholder="Search for food"
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul>
            {filteredFoodItems.map((item) => (
              <li key={item.id}>
                <a href="#" onClick={() => handleRecipeClick(item.id)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {selectedRecipe && (
          <div>
            <h2>{selectedRecipe.name}</h2>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
