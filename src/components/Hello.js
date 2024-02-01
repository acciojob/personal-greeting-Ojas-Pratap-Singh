
import React,{useState} from "react";

const Hello = () => {
    const [query , setQuery] = useState("")

    function handleChange(e){
        const search = e.target.value;
        setQuery(search)
    }

  return (
    <div>
         <p>Enter your name: </p>
        <input   onChange={handleChange}/> 
        {
            <p>{query && `Hello ${query}!`}</p>
        }
    </div>
  )
}

export default Hello
