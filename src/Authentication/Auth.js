import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Auth.css";

function Auth(props) {
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const goHandler = () => {
    const inputValue = inputRef.current.value;
    localStorage.setItem("accessKey", inputValue);
    navigate("/");
  };

  const gotoSettings = () => {
    navigate("/settings");
  }
  
  return (
    <>
      <div className="container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="box"
        >
          <TextField
            id="outlined-basic"
            label="Access Key"
            variant="outlined"
            className="input"
            inputRef={inputRef}
          />
          <Button variant="outlined" onClick={goHandler} className="submit">
            Go
          </Button>
          
          <img src="gearwheel.jpeg" alt="Settings" className="auth-icon" onClick={gotoSettings}/>

        </Box>
      </div>
    </>
  );
}

export default Auth;
