import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import Fruits from './fruits';

// const students =[
//   {img:1, name:'Apple'},
//   {img:2, name:'Strawberry'},
//   {img:3, name:'Lemon'},
//   {img:4, name:'Watermelon'},
//   {img:5, name:'Melon'},
//   {img:6, name:'DragonFruit'}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Fruits/>
  </React.StrictMode>
);
 // students.map((value) =>{
      //   return (
      //     <App data = {value}/>
      //   )
      // })


