import React from 'react'
import { useState, useReducer , useEffect , useRef , createContext} from 'react'
import axios from 'axios'
import Login from './Component/Login'
import User from './Component/User'

export const AppContext = createContext(null)


const App = () => { 

 const[counter , setCounter] = useState(0)
 const [inputValue ,setInputValue] = useState("Catch me")
 const [data ,setData] = useState(0)
 const inputRef = useRef(null)
 const [username, setUsername] = useState('')


 const increment =() =>{
    setCounter(counter + 1)
 }
 const decrement =() =>{
    setCounter(counter - 1)
 }

 let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue)
 }

 const reducer = (state ,action) => {
    switch (action.type){
        case 'PLUS':
            return {count:state.count + 1}
        case 'MINUS':
            return {count:state.count - 1} 
            default:
                return state

    }
 } 
const [state , dispatch] = useReducer(reducer , {count:0}) 

// useEffect
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
        setData(response.data[0].email)
    })
}, [])

const onClick = () => {
    inputRef.current.focus()
}
  
  return (
    
    <div className='container'>
        
        {/* useState */}
      <button onClick={decrement}>-</button>
       {counter}
      <button onClick={increment}>+</button>
   
     <input type="'text" placeholder="type to change name...." onChange={onChange} /> 
     {inputValue}


     {/* useReducer */}
     <button onClick={() =>{dispatch({type:'PLUS'})}}> Click me!!!</button>
     <h1>{state.count}</h1>
     <button onClick={() =>{dispatch({type:'MINUS'})}}> Click me!!!</button>

    {/* useEffect */}
     <div>
         <h1>{data}</h1>
     </div>    

     <div>
        <h1>Karimov</h1>
        <input type="text" placeholder='Think smth...' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
     </div>
    
    <AppContext.Provider value={{username, setUsername}}>
       <Login /> < User />
    </AppContext.Provider>

    </div>

    
  )
}

export default App