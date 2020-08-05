import React from "react";
// import { ReactDOM } from "react-dom";
import './Movie.css'

function Movie(props) {
  console.log(props);
  return (
    <>
      <div className="img_div">
        <img src={props.src} alt={props.alt} />
      </div>
    </>
  );
}

export default Movie;
