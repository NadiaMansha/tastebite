import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
   <div className="tastebite_newsletter">
        <h1>Deliciousness to your inbox</h1>
        <p>
         Enjoy weekly recipes, tips, and more!
        </p>
        <form>
            <input type="email" placeholder="Email" />
            <button type="submit">Join</button>
        </form>
<p>
    By subscribing, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>
</p>
   </div>
  )
}

export default NewsLetter