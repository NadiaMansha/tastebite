
import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Recipes from './features/recipes/Recipes';
import RecipeDetails from './pages/recipe-details/RecipeDetails';
import Categories from './features/categories/Categories';
import Search from './features/search/Search';
import Image from './pages/Image';
import process from 'process';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path='categories' element={<Categories />} />
        <Route path="search" element={<Search />} />
       
      </Route>,
      <Route path="image" element={<Image />} />,
    ])
  );


  return (
  
    <div className="App">
      <RouterProvider router={router} />
      
      </div>
  )
}

export default App
