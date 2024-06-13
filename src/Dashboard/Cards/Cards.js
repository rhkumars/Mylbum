import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const CardsComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const album = useSelector((state) => state.mypics.album);

  let index = 0;
  const minSwipeDistance = 50 


  const extractNumberFromString = (str) => {
    const numberRegex = /\d+/;
    const match = str.match(numberRegex);
    if (match) {
      return parseInt(match[0]);
    }
    return null;
  };

  useEffect(() => {
    album.length === 0 && navigate(`/pics`);
  }, []);

  useState(() => {
    index = extractNumberFromString(id);
    setImageUrl(album[index]);
  }, [album, id]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        changeImageSrc("left");
      } else if (event.key === "ArrowRight") {
        changeImageSrc("right");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const changeImageSrc = (pointer) => {
    if (album.length === 0) {
      navigate(`/pics`);
    }
    const imgTag = document.getElementById("img");
    const currentIndex = extractNumberFromString(id);
    let newIndex = 0;
    let nextIndex = 0;
    if (pointer === "right") {
      newIndex = currentIndex + 1;
      nextIndex = newIndex >= album.length ? 0 : newIndex;
    } else {
      newIndex = currentIndex - 1;
      nextIndex = newIndex < 0 ? album.length - 1 : newIndex;
    }

    navigate(`/cards/:${nextIndex}`);
    imgTag.src = album[nextIndex];
    setImageUrl(album[nextIndex]);
  };

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe ) {
    console.log('swipe', isLeftSwipe ? 'left' : 'right')
    changeImageSrc('left')
  }
  else if(isRightSwipe){
    changeImageSrc('right')
  
  }
}

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <img id="img" className="pic" src={imageUrl} alt={"altText"} />
    </div>
  );
};

export default CardsComponent;
