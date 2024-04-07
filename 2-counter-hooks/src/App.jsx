import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(6)    // [variable,function]

  // let counter = 5

  const addValue = () =>{
    if(counter <10){
      setCounter(counter+1)
    }else{
      alert("Not more than 10")
    }
  }

  const removeValue = ()=>{
    if(counter > 0){
      setCounter(counter-1)
    }else{
      alert("Not less than 0")
    }
  }

  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
