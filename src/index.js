import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie";
import './Movie.css'
import Values from './valus'
import App from './App'

ReactDOM.render(
  <>
  <App />
    <h1 className="Heading">Movie List</h1>

    {Values.map((val)=>{
  return(
    <Movie key={val.id} src={val.src} alt={val.alt}/>
  )
})}
  </>,
  document.getElementById("root")
);
