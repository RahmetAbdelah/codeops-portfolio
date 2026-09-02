import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

 function State(){
    const [state, setState] = useState(0)
    useEffect(()=>{
        console.log(`component render ${state}`)
    }, [state])
    const handleClick=()=>{

         setState(state+1);

         }
    
    return(
        <>
        <div>
            {state}
        </div>
        <button onClick={handleClick}>increment</button>
        </>
        
    )

}

 export default State;