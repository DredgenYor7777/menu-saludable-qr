import { useState } from 'react';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import './Gallery.css';

function Gallery() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1 className="gallery-title">Menú Saludable</h1>
        <p className="gallery-subtitle">Selecciona un platillo para ver su información nutricional</p>
      </header>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => handleCardClick(recipe)}
          />
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={handleCloseModal}
        />
      )}

      <footer className="gallery-footer">
        <p>Desarrollado por VBCR</p>
      </footer>
    </div>
  );
}

export default Gallery;
