import './MainRecipe.css';
import React from 'react';

export default function MainRecipe({selectedRecipe}) {
    return (
        <section className="recipe-container">
            <img className="recipe-image" src={selectedRecipe.image} alt={selectedRecipe.title}/>
            <h1 className="recipe-title">{selectedRecipe.title}</h1>
            <p className="recipe-description">{selectedRecipe.description}</p>

            <div className="ingredients">
                <h2>Ingredients:</h2>
                <ul>
                    {selectedRecipe.ingredients.map((ingredient) => {
                        
                        return (<li>{ingredient}</li>)})}
                </ul>
            </div>

            <div className="steps">
                <h2>Cooking Steps:</h2>
                <ol>
                    {selectedRecipe.steps.map((step) => {
                        
                        return (<li>{step}</li>)})}
                </ol>
            </div>
        </section>
      )
};

