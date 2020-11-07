import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../../firebase";
import "./Preview.css";

const useStyles = makeStyles({
  root: {
    width: "90%",
    padding: "30px",
    margin: "20px",
    height: "70vh",
  },
  head:{
    fontFamily:"'Roboto', sans-serif",
    fontSize:"24px",
  }
});

const Preview = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { personData, cityData } = props.location;

  const sectorList = cityData ? Object.keys(cityData) : [];

  // const addFormData = () => {
  //   db.collection("forms").add({
  //     ...personData,
  //     ...cityData
  //   });
  // };

  const addCityData = () => {
    console.log(cityData);
    console.log("Values of city data: ", Object.values(cityData));
    let values = Object.values(cityData);

    let sectors = [];
    values.map((data) => sectors.push(...data));

    // Add data to db
    db.collection("forms").add({
      ...personData,
      sectors,
    });
    history.push("/invitation/thankyou");
  };

  useEffect(() => {
    if (!personData || !cityData) {
      history.push("/invitation");
    }
  });

  //   console.log(props.location);
  return (
    <div className={classes.root}>
      <h1 className={classes.head}>Step 3: City data availability</h1>
      <p>Preview your entry</p>
      <table>
        <tbody>
          <tr>
            <td>
              <h2>City Name:</h2>
            </td>
            <td>{personData?.city}</td>
          </tr>
          <tr>
            <td>
              <h2>Point of Contact from the city:</h2>
            </td>
            <td>{personData?.poc}</td>
          </tr>
          <tr>
            <td>
              <h2>Email:</h2>
            </td>
            <td>{personData?.email}</td>
          </tr>
        </tbody>
      </table>
      <h2>List of DataSets</h2>
      <table>
        <tbody>
          {sectorList?.length
            ? sectorList.map((sector) => (
                <tr>
                  <td>
                    <h2>{sector}:</h2>
                  </td>
                  {cityData[sector].map((data) => (
                    <tr>
                      <td>{data}</td>
                    </tr>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <Button
        variant="contained"
        color="primary"
        onClick={addCityData}
        style={{
          backgroundColor: "#DC4351",
          padding: "5px",
          borderRadius: "30px",
          color: "whitesmoke",
          fontSize: "24px",
          border: "1px solid #DC4351",
          outline: "none",
          cursor: "pointer",
          width: "200px",
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Preview;
