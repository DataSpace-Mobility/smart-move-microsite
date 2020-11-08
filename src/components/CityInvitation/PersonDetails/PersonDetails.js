import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "90%",
    padding: "30px",
    margin: "20px",
    // height: "75vh",
    color: "#3e3e3f",
  },
  button: {
    backgroundColor: "rgb(220, 67, 81)",
    padding: "5px",
    borderRadius: "30px",
    color: "whitesmoke",
    fontSize: "24px",
    border: "1px solid rgb(220, 67, 81)",
    outline: "currentcolor none medium",
    cursor: "pointer",
    width: "200px",
  },
  head: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "24px",
    marginBottom: "10px",
  },
  cityform: {
    display: "flex",
    flexDirection: "column",

    "& > div": {
      marginBottom: "10px",
    },
  },
});

const initialState = {
  city: "",
  poc: "",
  email: "",
  phone: "",
};
const initialError = {
  city: false,
  poc: false,
  email: false,
  phone: false,
};

const CityDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const [input, setInput] = useState(initialState);
  // const [errorText, setErrorText] = useState(initialErrorTest);
  const [error, setError] = useState(initialError);

  const errorText = {
    city: "Enter city",
    poc: "Enter Point of Contact",
    email: "Enter Correct Mail id",
    phone: "Enter phone",
  };

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const addPerson = () => {
    if (!input.city) {
      setError({...error,"city":true });
    }else if (!input.phone) {
      setError({...error,"phone":true });
    }else if (!input.email) {
      setError({...error,"email":true });
      console.log(error);
    }else if (!input.poc) {
      setError({...error,poc:true });
    }else{
      history.push({ pathname: "/invitation/city-data", personData: input });
      setInput(initialState);  
    }
    
  };
console.log(error);
  return (
    <div className={classes.root}>
      <h1 className={classes.head}>Step:1 City Details</h1>
      <div className={classes.cityform}>
        <TextField
          id="outlined-basic"
          name="city"
          label="City Name"
          variant="outlined"
          value={input.city}
          onChange={handleInput}
          // error={error.city}
          // helperText={errorText.city}
        />
        <TextField
          id="outlined-basic"
          label="Point of contact"
          variant="outlined"
          name="poc"
          value={input.poc}
          onChange={handleInput}
          // error={error.poc}
          // helperText={errorText.poc}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={input.email}
          onChange={handleInput}
          // error={error.email}
          // helperText={errorText.email}
        />
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
          name="phone"
          value={input.phone}
          onChange={handleInput}
          // error={error.phone}
          // helperText={errorText.phone}
        />
        <Button
          size="large"
          variant="contained"
          onClick={addPerson}
          className={classes.button}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CityDetails;
