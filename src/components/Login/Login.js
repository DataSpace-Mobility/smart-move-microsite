import React, { useState } from "react";
import "./Login.css";
import { auth, db } from "../../firebase";
import { Button } from "@material-ui/core";
// import { Button } from "../../globalStyles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState([]);

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        db.collection("forms").onSnapshot((snapshot) =>
          setForm(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      })
      .catch((event) => alert(event.message));
  };
  // const register = (event) => {
  //   event.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       history.push("/");
  //     })
  //     .catch((event) => alert(event.message));
  // };
  // console.log('form:',form);

  const showLogin = (
    <div className="login">
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <Button
            onClick={login}
            type="submit"
            style={{
              backgroundColor: "#DC4351",
              padding: "5px",
              borderRadius: "30px",
              color: "whitesmoke",
              fontSize: "20px",
              border: "1px solid #DC4351",
              outline: "none",
              cursor: "pointer",
              width: "200px",
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
  // console.log(
  //   "form:",
  //   form.map((item) => console.log(item))
  // );
  const showForm = (
    <div>
      <h2>City Data</h2>
      <table>
        <tr>
          <th>POC</th>
          <th>Email</th>
          <th>City</th>
          <th>Phone</th>
          <th>Sector</th>
        </tr>
        {form.map((item) => (
          <tr>
            <td>{item.data.poc}</td>
            <td>{item.data.email}</td>
            <td>{item.data.city}</td>
            <td>{item.data.phone}</td>
            <td>{item.data.sectors.join(" | ")}</td>
          </tr>
        ))}
      </table>
    </div>
  );

  return <>{form.length ? showForm : showLogin}</>;
}

export default Login;
