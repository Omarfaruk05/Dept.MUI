/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormGroup, TextField, Button } from "@mui/material";
import loginPic from "../assets/20824344_6343825.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IUserInfo } from "../inferfaces/interface";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userInfo: IUserInfo = {
      name: e.target.name.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
    };

    await localStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate("/home");
  };

  const handleInputChange = () => {
    const form = document.forms.namedItem(
      "loginForm"
    ) as HTMLFormElement | null;

    if (form) {
      setFormIsValid(form.checkValidity());
    }
  };
  return (
    <div
      style={{
        height: "94vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 10px",
      }}
    >
      <img
        className="loginPic"
        style={{ width: "50%" }}
        src={loginPic}
        alt=""
      />

      <form
        style={{
          width: "400px",
          textAlign: "center",
        }}
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        name="loginForm"
      >
        <FormGroup>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            required
            type="email"
          />
        </FormGroup>
        <Button
          style={{ width: "100%", padding: "10px 0" }}
          type="submit"
          variant="contained"
          color="info"
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default LoginPage;
