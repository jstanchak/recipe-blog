import { useState, useEffect } from 'react'
import './App.css'
import { RECIPES } from './data'
import RecipeCard from './components/RecipeCard/RecipeCard'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import MainRecipe from './components/MainRecipe/MainRecipe'
import Intro from './components/Intro/Intro'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [tab, setTab] = useState(0)
  const blogTitle = 'Simple Drip Dinners';

  function focusRecipe(recipe, clearTab = true, event=null) {
    
    if (event) {
      event.preventDefault();
    }
    
    setSelectedRecipe(recipe);
    if (clearTab) {
      setTab(null);
    }
    // Scroll to the top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Change the URL
    if (recipe) {
      
      const newUrl = `/recipe/${recipe.id}`; // Assuming each recipe has a unique 'id' property
      window.history.pushState({ recipeId: recipe.id }, recipe.title, newUrl);
      document.title = recipe.title; // Optionally, change the document title to the recipe title
    } else {
      window.history.pushState({}, '', '/'); // Go back to the home page URL
      document.title = blogTitle; // Reset the document title to the blog's title
    }
  }

  function clearRecipe() {
    focusRecipe(null);
  }
    
  function selectTab(index) {
      setTab(index);
      if (index == 0) {
          clearRecipe();
      } else if (index == 2) {
        surpriseRecipe();
      }
  }

  function surpriseRecipe() {
    const randomIndex = Math.floor(Math.random() * RECIPES.length);
    focusRecipe(RECIPES[randomIndex], false);
  }

  useEffect(() => {
    // check for already focused recipe
    const path = window.location.pathname;
    const recipeSlug = path.split('/recipe/')[1];
    if (recipeSlug) {
      const foundRecipe = RECIPES.find((recipe) => recipe.id === recipeSlug);
      if (foundRecipe) {
        setSelectedRecipe(foundRecipe);
      } else {
        // clear it
        clearRecipe();
      }
    }
  }, []);

  return (
    <>
    <Analytics/>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

    <Header blogTitle={blogTitle} />
    <Navigation selectTab={selectTab} tab={tab}/>
    <section className="main-content">
        {selectedRecipe ? <MainRecipe selectedRecipe={selectedRecipe} /> : <Intro blogTitle={blogTitle} />}
        {RECIPES.map((recipe) => (
          <div key={recipe.title}>
            <RecipeCard readMoreAction={(event)=>focusRecipe(recipe, false, event)} >{recipe}</RecipeCard>
          </div>
        ))}
    </section>
    <Footer blogTitle={blogTitle} />
    </>
  )
}

export default App;
