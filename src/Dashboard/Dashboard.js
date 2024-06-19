import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlbum } from "../store/mypicSlice";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.mypics.albums);

  function handleClick(e) {
    dispatch(setAlbum([...albums[e.target.id]]));
    console.log(`/gallery/:${e.target.id}`);
    navigate(`/gallery/:${e.target.id}`);
  }

  return (
    <div className="dashboard-card-container">
      {albums.map((image, index) => (
        <div className="dashboard-card">
          <img
            id={index}
            src={image[0]}
            alt={index}
            onClick={(e) => handleClick(e)}
          />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
