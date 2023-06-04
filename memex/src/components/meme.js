import React from "react";
export default function Meme(props) {
    return (
       <div className="meme--container">
              <div className="meme--form">
                  <form className="meme--form--container"> 
                  <input
                    type="text"
                    name="write Text"
                    placeholder="Top Text"
            
                  ></input><input
                  type="text"
                  name="Write Text"
                  placeholder="Top Text"
          
                ></input>
                  
                  </form> 
                  <button type="submit" className="btn-1">Generate Meme XD</button>


              </div>


       </div>
    )

}