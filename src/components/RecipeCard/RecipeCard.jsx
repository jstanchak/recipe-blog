// import "./RecipeCard.css";

export default function RecipeCard({children, readMoreAction}) {
    return (
      <article className="transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg flex overflow-hidden relative flex-col max-w-sm min-h-[430px] recipe-card m-4 rounded-lg shadow-md bg-sage" onClick={readMoreAction}>
        <img className="w-full max-w-full h-[200px] object-cover rounded-lg" onClick={readMoreAction} src={children.image} alt={children.title} />
        <div className="px-3">
          <h2 className="font-title text-2xl mx-3 my-4 cursor-pointer font-bold text-slate-800 hover:underline" onClick={readMoreAction}>{children.title}</h2>
          <p className="font-body text-slate-800 mb-4 font-normal">{children.description}</p>
          <a href="#" className="text-md block font-bold font-body text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md no-underline mt-2 transition-colors duration-300 hover:bg-gray-900 ease-in-out absolute bottom-5 left-1/2 transform -translate-x-1/2" onClick={readMoreAction}>Read More</a>
        </div>
      </article>
    )
  }