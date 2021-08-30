import "./styles.css";
import {useState} from 'react';


const emojiDictionary ={
  "😄":"Smiling",
  "😞":"Dissapointed",
  "🤗":"Hug",
  "🚣":"Person Rowing Boat",
  "🗾":"Map of Japan",
  "⛰️":"Mountain",
  "🏕️":"Camping",
  "🌋":"Volcano",
  "🗻":"Mountain Fuji",
  "🏞️":"National Park",
  "🏜️":"Desert",
  "🏖️":"Beach with Umbrella",
  "🏟️":"Stadium",
  "🏗️":"Building Construction",
  "🏝️":"Desert Island",
  "🏛️": "Classical Building",
  "🏚️": "Derelict House",
  "🏢": "Office Building",
 
}

var emojiWeKnow = Object.keys(emojiDictionary);
console.log(emojiWeKnow);

export default function App() {
  const [meaning,setmeaning] = useState("");
  function emojiInputHandler(event){
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined){
      meaning="We dont have this in our database";
    }
    setmeaning(meaning);
    console.log(meaning);
  }
  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji]
    setmeaning(meaning);
  }
  
  
  return (
    <div className="App">
      <h1>Inside outt</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>Meaning: {meaning}</h2>    
      <h3>Emojis which we Know</h3>
      {emojiWeKnow.map(function (emoji)
      {
        return(
        
          <span 
          onClick={()=>emojiClickHandler(emoji)}
          style={{fontSize:"1rem",padding:"0.5rem",cursor:"pointer"}}
          key={emoji} >
          {emoji}
          </span>
        );
      })}
      

      
    </div>
  );
}
