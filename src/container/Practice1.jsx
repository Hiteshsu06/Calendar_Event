import React, { useState } from "react";

const Practice1 = ({handleClick}) => {
  const [input, setInput] = useState("");
  const [array,setArray]=useState([]);

  console.log("input", input);
  const submitHandler=(e)=>{
    e.preventDefault();
    setArray([...array,input]);
    setInput("")
   return(handleClick(array)) 
  }
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={input}
          name="input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={submitHandler}>Click</button>
      </form>
    </div>
  );
};

export default Practice1;
