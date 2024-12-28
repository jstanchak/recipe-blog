import { useState, useEffect } from 'react';
import Intro from '../components/Intro/Intro'
import { RECIPES } from '../data'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import MainRecipe from '../components/MainRecipe/MainRecipe'

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(() => {
    const path = window.location.pathname;
    const recipeSlug = path.split('/recipe/')[1];
    if (recipeSlug) {
        const foundRecipe = RECIPES.find((recipe) => recipe.id === recipeSlug);
        setSelectedRecipe(foundRecipe);
    } else {
        alert('no recipet found');
    }
}, []);

  return (
    <section className="main-content">
        {selectedRecipe ? <MainRecipe selectedRecipe={selectedRecipe} /> : null }
        {RECIPES.map((recipe) => (
          <div key={recipe.title}>
            <RecipeCard readMoreAction={(event)=>focusRecipe(recipe, false, event)} >{recipe}</RecipeCard>
          </div>
        ))}
    </section>
  )
}