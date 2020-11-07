import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./PersonDetails.css";

const useStyles = makeStyles({
  root: {
    width: "90%",
    padding: "30px",
    margin: "20px",
    height: "75vh",
    color: "#3e3e3f",
  },
  button: {
    backgroundColor: "#DC4351",
    padding: "5px",
    borderRadius: "30px",
    color: "whitesmoke",
    fontSize: "24px",
    border: "1px solid #DC4351",
    outline: "none",
    cursor: "pointer",
    width: "200px",
  },
  head: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "24px",
  },
});

const initialState = {
  city: "",
  poc: "",
  email: "",
  phone: "",
};
const CityDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const [input, setInput] = useState(initialState);

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const addPerson = () => {
    history.push({ pathname: "/invitation/city-data", personData: input });
    setInput(initialState);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.head}>Step:1 City Details</h1>
      <div className="city_details">
        <TextField
          id="outlined-basic"
          name="city"
          label="City Name"
          variant="outlined"
          value={input.city}
          onChange={handleInput}
          required
        />
        <TextField
          id="outlined-basic"
          label="Point of contact"
          variant="outlined"
          name="poc"
          value={input.poc}
          onChange={handleInput}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={input.email}
          onChange={handleInput}
          required
        />
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
          name="phone"
          value={input.phone}
          onChange={handleInput}
          required
        />
        <Button size="large" variant="contained" onClick={addPerson} className={classes.button}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default CityDetails;
