import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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
  const [input, setInput] = useState(initialState);
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
      setError({ ...error, city: true });
    } else if (!input.phone) {
      setError({ ...error, phone: true });
    } else if (!input.email) {
      setError({ ...error, email: true });
      console.log(error);
    } else if (!input.poc) {
      setError({ ...error, poc: true });
    } else {
      // history.push({ pathname: "/invitation/city-data", personData: input });
      setInput(initialState);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        City Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="city"
            name="city"
            label="City Name"
            fullWidth
            autoComplete="City Name"
            value={input.city}
            onChange={handleInput}
            // error={error.city}
            // helperText={errorText.city}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="poc"
            name="poc"
            label="Point of Contact"
            fullWidth
            autoComplete="Point of Contact"
            value={input.poc}
            onChange={handleInput}
            // error={error.poc}
            // helperText={errorText.poc}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            type="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="Email"
            value={input.email}
            onChange={handleInput}
            // error={error.email}
            // helperText={errorText.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phone"
            name="phone"
            label="Contact Number"
            fullWidth
            autoComplete="Contact"
            value={input.phone}
            onChange={handleInput}
            // error={error.phone}
            // helperText={errorText.phone}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CityDetails;
