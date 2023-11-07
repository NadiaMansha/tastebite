import React, { useEffect ,useState} from 'react'
import './RecipeDetails.css'
import { useParams } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { selectRecipeById, fetchRecipes,selectAllRecipes ,selectRecipeError,selectRecipeStatus} from '../../features/recipes/recipesSlice'

const RecipeDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
   
    const recipeStatus= useSelector(selectRecipeStatus)
    const recipeError = useSelector(selectRecipeError)
    const recipeById = useSelector((state) => selectRecipeById(state, id))
    const recipes = useSelector(selectAllRecipes)
    useEffect(() => {
        if (recipeStatus === 'idle') {
            dispatch(fetchRecipes())
            }
    }
    )
    console.log(recipes)
    console.log(recipeById)
   
 


  return (
    <div className="tasyebite_recipe_details">
        <h1>Recipe Details</h1>
        {
           recipeById && (
                <div className="recipe_details">
                    <div className="recipe_details_image">
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                    <div className="recipe_details_info">
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default RecipeDetails