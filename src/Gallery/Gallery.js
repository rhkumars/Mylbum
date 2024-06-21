import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const images = useSelector((state) => state.mypics.album);

  useEffect(() => {
    if (images.length === 0) {
      navigate(`/`);
    }
  }, [images, id]);

  function handleClick(e) {
    console.log(`/cards/:${e.target.id}`);
    navigate(`/cards/:${e.target.id}`);
  }

  return (
    <div className="gallery-container">
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
      {/* <div className="footer">
        <h4>Footer</h4>
      </div> */}
    </div>
  );
};

export default Gallery;
