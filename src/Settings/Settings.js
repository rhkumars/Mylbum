import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { setanimation } from '../store/mypicSlice';
import "./Settings.css";

function Settings(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [animi, setAnimi] = useState(0);

  const handleChange = (event) => {
    setAnimi(event.target.value);
    dispatch(setanimation(event.target.value))
  };

  const goHandler = () => {
    navigate("/pics");
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
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={animi}
              onChange={handleChange}
              displayEmpty
            className="input"
            >
              
              <MenuItem value={0}>Clouds</MenuItem>
              <MenuItem value={1}>Drift Clouds</MenuItem>
              <MenuItem value={2}>Rain</MenuItem>
              <MenuItem value={3}>Splash Rain</MenuItem>
            </Select>
            
          </FormControl>

          <Button variant="outlined" onClick={goHandler} className="submit">
            Go
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Settings;
