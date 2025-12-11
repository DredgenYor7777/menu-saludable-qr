import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import './RecipeModal.css';

function RecipeModal({ recipe, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="modal-header">
            <h2 className="modal-title">{recipe.name}</h2>
            <p className="modal-category">{recipe.category}</p>
            {recipe.price && <p className="modal-price">{recipe.price}</p>}
          </div>

          <div className="modal-body">
            <section className="modal-section">
              <h3 className="section-title">
                <span className="title-icon">📊</span>
                Información Nutricional
              </h3>
              <div className="nutrition-grid">
                <div className="nutrition-row">
                  <span className="nutrition-key">Energía</span>
                  <span className="nutrition-val">{recipe.nutrition.energia}</span>
                </div>
                <div className="nutrition-row">
                  <span className="nutrition-key">Proteína</span>
                  <span className="nutrition-val">{recipe.nutrition.proteina}</span>
                </div>
                <div className="nutrition-row">
                  <span className="nutrition-key">Grasas totales</span>
                  <span className="nutrition-val">{recipe.nutrition.grasas}</span>
                </div>
                {recipe.nutrition.grasasSaturadas && (
                  <div className="nutrition-row">
                    <span className="nutrition-key">Grasas saturadas</span>
                    <span className="nutrition-val">{recipe.nutrition.grasasSaturadas}</span>
                  </div>
                )}
                <div className="nutrition-row">
                  <span className="nutrition-key">Carbohidratos</span>
                  <span className="nutrition-val">{recipe.nutrition.carbohidratos}</span>
                </div>
                <div className="nutrition-row">
                  <span className="nutrition-key">Fibra</span>
                  <span className="nutrition-val">{recipe.nutrition.fibra}</span>
                </div>
                {recipe.nutrition.azucares && (
                  <div className="nutrition-row">
                    <span className="nutrition-key">Azúcares</span>
                    <span className="nutrition-val">{recipe.nutrition.azucares}</span>
                  </div>
                )}
                <div className="nutrition-row">
                  <span className="nutrition-key">Sodio</span>
                  <span className="nutrition-val">{recipe.nutrition.sodio}</span>
                </div>
                <div className="nutrition-row highlight">
                  <span className="nutrition-key">Vitaminas</span>
                  <span className="nutrition-val">{recipe.nutrition.vitaminas}</span>
                </div>
                <div className="nutrition-row highlight">
                  <span className="nutrition-key">Minerales</span>
                  <span className="nutrition-val">{recipe.nutrition.minerales}</span>
                </div>
              </div>
            </section>

            <section className="modal-section">
              <h3 className="section-title">
                <span className="title-icon">🥗</span>
                Ingredientes
              </h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    className="ingredient-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="ingredient-bullet">•</span>
                    {ingredient}
                  </motion.li>
                ))}
              </ul>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default RecipeModal;
