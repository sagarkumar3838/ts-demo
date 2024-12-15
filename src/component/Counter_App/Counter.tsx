import { useState } from "react"



const Counter = () => {

    const [count , setCount ] = useState<number>(0)
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <button  style={{color: "red"}} onClick={()=>setCount(count + 1)} >Increment</button>
      <button  style={{color: "blue"}} onClick={()=>setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
