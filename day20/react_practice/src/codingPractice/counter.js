import React, {useState} from 'react'
// building a simple Counter that increments when a button is clicked
const Counter = () => {
    const [count, setCount] = useState(0);
    // handling click event
    
  return (
    <div>
        <button
        onClick={()=> {
            setCount(count + 1)
        }}
        >Number of clicks: {count}</button>
      
    </div>
  )
}

export default Counter
