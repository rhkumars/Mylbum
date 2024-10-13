import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react"; // Add this line
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Settings.css";
import { encryptString } from "../Shared/utils";

function Settings(props) {
  const navigate = useNavigate();
  const [accessKey, setAccessKey] = useState("");

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    const encryptedValue = encryptString(value,process.env.REACT_APP_SECRET_KEY);
    setAccessKey(encryptedValue);

  };

  const goHandler = () => {
    navigate("/");
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
            label="Access Key"
            variant="outlined"
            className="input"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Encrypted Key"
            variant="outlined"
            className="input"
            value={accessKey}
          />
          {/* <p>{accessKey}</p> */}


          <Button variant="outlined" onClick={goHandler} className="submit">
            Go
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Settings;
