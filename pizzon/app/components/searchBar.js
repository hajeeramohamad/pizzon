import {FaSearch} from "react-icons/fa"
import React, {useEffect, useState} from "react"

export const SearchBar = () => {
const [input, setInput] = useState("")
useEffect(() =>{
    handleChange()
}, [])


const fetchData = (value) => {
    fetch("https://pizza-ordering-anno.onrender.com/api/orders")
      .then((res) => res.json())
      .then((json) => {
      const results = json.filter((user)=>{
        return user && user.name && user.name.toLowerCase().includes(value);
      });
      console.log(results)
      });
}

const handleChange = (value)=>{
    setInput(value)
    fetchData(value)
}

    return (
      <div className=" w-100% b-10">
        <input
          placeholder="type to search..."
          className="bg-transparent h-100% w-100% text-xl border-none ml-5"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <FaSearch id="search-icon" className="text-blue-800 cursor-pointer" />
      </div>
    );
}