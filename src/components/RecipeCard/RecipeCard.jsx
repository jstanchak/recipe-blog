import "./RecipeCard.css";

export default function RecipeCard({children, readMoreAction}) {
    return (
      <article className="recipe-card sage" onClick={readMoreAction}>
        <img onClick={readMoreAction} src={children.image} alt={children.title} />
        <h2 onClick={readMoreAction}>{children.title}</h2>
        <p>{children.description}</p>
        <a href="#" className="read-more-btn" onClick={readMoreAction}>Read More</a>
      </article>
    )
  }