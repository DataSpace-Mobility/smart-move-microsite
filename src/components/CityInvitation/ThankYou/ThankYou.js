import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import "./ThankYou.css";

const useStyles = makeStyles({
  root: {
    // boxSizing: "border-box",
    // border: "1px solid black",
    // width: "50%",
    // padding: "30px",
    // marginTop: "20px",
    // height: "60vh",
    width:"90%",
    boxSizing: "border-box",
    border: "1px solid black",
    padding: "30px",
    margin: "20px",
    height: "max-content",
  },
});

const ThankYou = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Thank You for becoming a city partner</h1>
      <div className="city_details">
        <p>
          We have received your entry. Please share your data with us through
          our secure data sharing platform linked below.
        </p><br></br>
        <p>
          For instructions on how to upload data and your login password, please
          check your registered email.
        </p>
        <br></br><br></br>
        <Button
          variant="contained"
          color="primary"
          href="/"
        >
          Upload data on a secure platform
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
