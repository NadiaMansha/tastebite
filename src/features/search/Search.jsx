import React, { useEffect } from "react";
import "./Search.css";

import { useSearchParams } from "react-router-dom";
import {
  selectSearchResult,
  selectSearchError,
  selectSearchStatus,
  fetchSearch,
} from "./searchslice";
import { useSelector, useDispatch } from "react-redux";
import RecipeComponent from "../../components/recipie-component/RecipeComponent";


const Search = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectSearchStatus);
  const error = useSelector(selectSearchError);
  const searchResult = useSelector(selectSearchResult);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    dispatch(fetchSearch(search));
  }, [dispatch, search]);
  console.log(searchResult)
  return (
    <div className="search">

      
   
   {
              status === 'loading' && <div 
              className='loading'
              >Loading...</div>
            }
            {
              status === 'failed' && <div 
              className='error'
              >{error}</div>
            }
             {
               status === 'succeeded' && searchResult?.length===0 && <div
                className='no_books'
                >No books available</div>
             }

            
      {status === "succeeded" &&
        searchResult?.map((recipe) => 
        <RecipeComponent key={recipe.id} {...recipe} />)
        }  

    </div>
  );
};

export default Search;
