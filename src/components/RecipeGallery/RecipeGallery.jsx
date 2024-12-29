import { RECIPES } from "../../data";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function RecipeGallery({readMoreAction}) {
    return <section className="main-content">
            {RECIPES.map((recipe) => (
            <div key={recipe.title}>
                <RecipeCard readMoreAction={(event)=>readMoreAction(recipe, false, event)} >{recipe}</RecipeCard>
            </div>
            ))}
        </section>
}