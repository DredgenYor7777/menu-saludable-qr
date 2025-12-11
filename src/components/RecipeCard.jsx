import { motion } from 'framer-motion';
import './RecipeCard.css';

function RecipeCard({ recipe, onClick }) {
  return (
    <motion.div
      className="recipe-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="recipe-image-container">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-image"
          loading="lazy"
        />
        <div className="recipe-overlay">
          <span className="view-details">Ver detalles</span>
        </div>
      </div>

      <div className="recipe-content">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-category">{recipe.category}</p>
        {recipe.price && <p className="recipe-price">{recipe.price}</p>}
        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-nutrition-preview">
          <div className="nutrition-item">
            <span className="nutrition-label">Energía</span>
            <span className="nutrition-value">{recipe.nutrition.energia}</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-label">Proteína</span>
            <span className="nutrition-value">{recipe.nutrition.proteina}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RecipeCard;
