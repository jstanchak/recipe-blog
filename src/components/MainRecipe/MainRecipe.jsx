import './MainRecipe.css';
import React from 'react';

export default function MainRecipe({selectedRecipe}) {
    return (
        <section className="recipe-container font-body">
            <img className="recipe-image" src={selectedRecipe.image} alt={selectedRecipe.title}/>
            <h1 className="font-title text-2xl my-4 cursor-pointer font-bold text-slate-800 ">{selectedRecipe.title}</h1>
            <p className="font-body recipe-description">{selectedRecipe.description}</p>

            <div className="ingredients">
                <h2 className="font-title text-2xl my-4 cursor-pointer font-bold text-slate-800 ">Ingredients:</h2>
                <ul>
                    {selectedRecipe.ingredients.map((ingredient) => {
                        
                        return (<li>{ingredient}</li>)})}
                </ul>
            </div>

            <div className="steps">
                <h2 className="font-title text-2xl my-4 cursor-pointer font-bold text-slate-800 ">Cooking Steps:</h2>
                <ol>
                    {selectedRecipe.steps.map((step) => {
                        
                        return (<li>{step}</li>)})}
                </ol>
            </div>
        </section>
      )
};

