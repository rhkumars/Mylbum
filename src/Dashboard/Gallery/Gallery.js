import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const Gallery = (props) => {
  
  const navigate = useNavigate();
  const [images, setImages] = useState(props.images);


  function handleClick(e) {
    console.log(`/cards/:${e.target.id}`);
    navigate(`/cards/:${e.target.id}`);
  }
console.log(images);
  return (
    <div className="gallery-container">
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            src={image}
            id={index}
            alt={image}
            className="img"
            onClick={(e) => handleClick(e)}
          />
        ))}
      </div>
      <div className="footer">
        <h4>Footer</h4>
      </div>
    </div>
  );
};

export default Gallery;
