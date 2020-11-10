import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width:"90%",
    padding: "30px",
    margin: "20px",
    // height: "max-content",
    color: "#3e3e3f",
    textAlign:"center"
  },
  thankmsg:{
    marginTop:"20px",
    marginBottom:"20px"
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
    width: "370px",
    marginTop: "20px",
    maxWidth:"80%"
  }
});

const ThankYou = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Thank You for becoming a city partner</h1>
      <div className={classes.thankmsg}>
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
          className={classes.button}
        >
          Upload data on a secure platform
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
