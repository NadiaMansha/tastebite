import React, { useEffect } from 'react'
import './Recipes.css'
import { useSelector,useDispatch } from 'react-redux'
import { selectAllRecipes ,selectRecipeError,selectRecipeStatus,fetchRecipes} from './recipesSlice'
import RecipeComponent from '../../components/recipie-component/RecipeComponent'
import { Link } from 'react-router-dom'


const Recipes = () => {
    const recipes = useSelector(selectAllRecipes)
    const error = useSelector(selectRecipeError)
    const status = useSelector(selectRecipeStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRecipes())
            }
    }
    )
    console.log(recipes)
  return (
    <div className="recipes_container">
        <h1>Latest Recipes</h1>
<div className="tastebite_recipes">
 
    {
        status === 'loading' && <div className="loader">Loading...</div>
    }
    {
        status === 'succeeded' && recipes.map((recipe) => (
           < Link to={`/recipes/${recipe.id}`}>
           <RecipeComponent key={recipe.id} {...recipe} />
           </Link>
        ))
    }
    {
        status === 'failed' && <div>{error}</div>
    }
</div>
</div>
  )
}

export default Recipes