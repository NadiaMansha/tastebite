import React from 'react'
import './RecipeComponent.css'

const RecipeComponent = ({
    title,
    image,
    readyInMinutes,
}) => {
  return (
<div className="recipe_component">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{
        readyInMinutes?`Ready in ${readyInMinutes} minutes`:''
      }
    </p>

</div>
  )
}

export default RecipeComponent