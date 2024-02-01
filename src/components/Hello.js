
import React,{useState} from "react";

const Hello = () => {
    const [query , setQuery] = useState("")

    function handleChange(e){
        const search = e.target.value;
        setQuery(search)
    }

  return (
    <div>
        <input type="text" value={query} onChange={handleChange}/> 
        {
            query && <p>Hello {query}!</p>
        }
    </div>
  )
}

export default Hello
