import '../App.css'
import React, {useState, useEffect} from 'react'

const Button = (props)=> {
  const [count, setCount] = useState(0)
  const changeCount = (action)=>{
    // if (action === 'increment'){
    //   const incValue = count + 1
    //   return(setCount(incValue))
    // }else{
    //   const decValue = count - 1
    //   return(setCount(decValue))
    // }
    if (action === 'increment'){
      const incValue = count + 1
      return(setCount(incValue))
    }else if(action === 'decrement'){
      const decValue = count - 1
      return(setCount(decValue))
    }
  }
    return (<div className = "Button">
      <button onClick={()=>changeCount('increment')} style={{backgroundColor: props.color, height: props.height, width:props.width, fontSize:props.fontSize, margin:props.margin}}>
        +
      </button> 
      {count}
      <button onClick={()=>changeCount('decrement')} style={{backgroundColor: props.color, height: props.height, width:props.width, fontSize:props.fontSize, margin:props.margin}}>
        -
      </button>
    </div>
      // <button style={{backgroundColor: props.color, height: props.height, width:props.width, fontSize:props.fontSize}}>
      //   Submit
      //   </button>
      
    );
  }
  
  export default Button;
  