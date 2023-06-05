import React from "react";
import memesData from "../memesData";
export default function Meme(props) {
  //  const [memeImage,setMemeImage]=React.useState("");
 const [memeImage,setMeme]=React.useState({
  topText:"",
  bottomText:"",
  randomImg:"https://i.imgflip.com/1ur9b0.jpg"});

  const [allMemeImgs,setAllMemeImgs]=React.useState(memesData);


  function generateMeme(event) {
    const memesarray=memesData.data.memes;
    const randomIndex=Math.floor(Math.random()*memesarray.length);
    const url=memesarray[randomIndex].url;
    setMeme(
      prevMem=>(
      {
        ...prevMem,
        randomImg:url
      }));
    
    // const randomMeme=memesarray[randomIndex];
  }
    return (
      <main>
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
                  <button type="submit" className="btn-1"
                  onClick={generateMeme}
                  >Generate Meme XD</button>


              </div>

              <img src={memeImage} className="meme-img"></img>
       </div>
      
      </main>
    )

}