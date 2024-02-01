import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const [formError, setFormError] = useState({});
  const [fSubmit, setFSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "repeatPassword") {
      setShowRepeatPassword(!showRepeatPassword);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let errors = validate(formData);
    console.log(errors);
    setFormError(errors);

    let errorKey = Object.keys(errors);
    if (errorKey.length === 0) {
      // Let the user register
      setFSubmit(true);

      // Redirect to the Books page after successful registration
      navigate("/");
    } else {
      setFSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};
    if (data.firstname.trim() === "") {
      error.firstname = "Please enter the firstname";
    }
    if (data.lastname.trim() === "") {
      error.lastname = "Please enter the lastname";
    }
    if (data.email.trim() === "") {
      error.email = "Please enter the email";
    }
    if (data.password.length < 10) {
      error.password = "Password should be at least 10 characters long";
    }
    if (data.password !== data.repeatPassword) {
      error.repeatPassword = "Passwords do not match";
    }
    return error;
  };

  return (
    <>
      <div className="form-parent">
        <form onSubmit={formSubmit}>
         

          <div className="box">
            <label htmlFor="firstname">Enter first name</label>
            <input
              type="text"
              id="text"
              name="firstname"
              placeholder="first name"
              onChange={handleInput}
              style={{ textAlign: "center" }}
            />
            {formError.firstname ? <p>{formError.firstname}</p> : ""}
          </div>

          <div className="box2">
            <label htmlFor="lastname">Enter last name</label>
            <input
              type="text"
              id="text"
              name="lastname"
              placeholder="last name"
              onChange={handleInput}
              style={{ textAlign: "center" }}
            />
            {formError.lastname ? <p>{formError.lastname}</p> : ""}
          </div>

          <div className="box3">
            <label htmlFor="email">Enter email</label>
            <input
              type="email"
              id="text"
              name="email"
              placeholder="email"
              onChange={handleInput}
              style={{ textAlign: "center" }}
            />
            {formError.email ? <p>{formError.email}</p> : ""}
          </div>

          <div className="box5">
            <label htmlFor="password">Enter password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="text"
              name="password"
              placeholder="password"
              onChange={handleInput}
              style={{ textAlign: "center" }}
            />
            <div id="pass">
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              style={{ marginLeft: "10px" }}
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
            {formError.password ? <p>{formError.password}</p> : ""}
            </div>
          </div>

          <div className="box6">
            <label htmlFor="repeatPassword">Repeat your password</label>
            <input
              type={showRepeatPassword ? "text" : "password"}
              id="text"
              name="repeatPassword"
              placeholder="repeat password"
              onChange={handleInput}
              style={{ textAlign: "center" }}
            />

           <div id="pass">
           <button
              type="button"
              onClick={() => togglePasswordVisibility("repeatPassword")}
              style={{ marginLeft: "10px" }}
            >
              {showRepeatPassword ? "Hide" : "Show"} Password
            </button>
            {formError.repeatPassword ? <p>{formError.repeatPassword}</p> : ""}
           </div>
          </div>

          <input type="submit" id="text1" value={"Register"} className="button2"/>
        </form>
      </div>
    </>
  );
};

export default Forms;





