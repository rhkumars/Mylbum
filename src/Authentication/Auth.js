import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Auth.css";

function Auth(props) {
  const navigate = useNavigate();

  const goHandler = () => {
    navigate("/settings");
  };

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
            label="Email"
            variant="outlined"
            className="input"
          />
          <Button variant="outlined" onClick={goHandler} className="submit">
            Go
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Auth;
