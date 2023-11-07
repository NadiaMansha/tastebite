import React from 'react'
import './Home.css'
import image from '../../assets/image.png'
import Recipes from '../../features/recipes/Recipes'
import NewsLetter from '../../components/newletter/NewsLetter'

const Home = () => {
  
  return (
    <div className="home">
   <div className="tastebite_home">
    <div className="tastebite_home_left">
<img src={image} alt="home-image" />
</div>
<div className="tastebite_home_right">

<p>85% would make this again</p>
<h1>Mighty Super Cheesecake</h1>
<p>
  Look no further for a creamy and ultra smooth classic cheesecake
  recipe! Paired with a buttery graham cracker crust, no one can deny
  its simple decadence. For the best results, bake in a water bath.
</p>

</div>


   </div>
   <NewsLetter />
   <Recipes />

   </div>
  )
}

export default Home