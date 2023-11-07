import React, { useEffect } from 'react'
import './Categories.css'
import { useSelector ,useDispatch} from 'react-redux'
import { selectAllCategories,selectCategoryError,selectCategoryStatus, fetchCategories } from './categoriesSlice'
import Reecipecomponent from '../../components/recipie-component/RecipeComponent'

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectAllCategories)
  
    const handleCategoryClick = (category) => {
         dispatch(fetchCategories(category))
    }
    useEffect(() => {
        dispatch(fetchCategories('pizza'))
    }, [dispatch])
  
  return (
    <div className="tastebite_categories">
        <div className="tastebite_categories_buttons">
            <button 
            onClick={() => handleCategoryClick('pizza')}
            >
                <h3>Pizza</h3>
                
            </button >
            <button
            onClick={() => handleCategoryClick('pasta')}
            >
                <h3>Pasta</h3>
                </button>
            <button 
            onClick={() => handleCategoryClick('burger')}
            >
                <h3>Burger</h3>
                </button>
            <button 
            onClick={() => handleCategoryClick('salad')}
            >
                <h3>Salad</h3>
                </button>
            <button 
            onClick={() => handleCategoryClick('sweet')}
            >
                <h3>Desert</h3>
                </button>
            <button 
            onClick={() => handleCategoryClick('drinks')}
            >
                <h3>Drinks</h3>
                </button>
                
        </div>
        <div className="categories">
        {
            categories.map((category) => (
               <Reecipecomponent key={category.id} {...category} />
            ))
        }
        </div>
    </div>
  )
}

export default Categories