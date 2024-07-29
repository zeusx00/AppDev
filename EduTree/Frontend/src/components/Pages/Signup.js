import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const defaultState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    nameError: "",
    emailError: "",
    phoneError: "",
    passwordError: ""
  };

  const [formState, setFormState] = useState(defaultState);
  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let passwordError = "";
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneReg = /^\d{10}$/; // Simple phone number validation

    if (!formState.name) {
      nameError = "Name field is required";
    }

    if (!formState.email || reg.test(formState.email) === false) {
      emailError = "Email Field is Invalid";
    }

    if (!formState.phone || phoneReg.test(formState.phone) === false) {
      phoneError = "Phone number should be 10 digits";
    }

    if (!formState.password) {
      passwordError = "Password field is required";
    }

    if (nameError || emailError || phoneError || passwordError) {
      setFormState((prevState) => ({
        ...prevState,
        nameError,
        emailError,
        phoneError,
        passwordError
      }));
      return false;
    }

    return true;
  };

  const submit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (validate()) {
      console.log(formState);
      setFormState(defaultState);
      navigate("/"); // Navigate to the home page
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6 d-flex align-items-center justify-content-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4"><b>Create your account</b></h3>
                    <form onSubmit={submit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={`form-control ${formState.nameError ? 'invalid' : ''}`}
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          value={formState.name}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="name">Full Name</label>
                        {formState.nameError && <div className="text-danger">{formState.nameError}</div>}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className={`form-control ${formState.emailError ? 'invalid' : ''}`}
                          id="email"
                          name="email"
                          placeholder="name@example.com"
                          value={formState.email}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="email">Email address</label>
                        {formState.emailError && <div className="text-danger">{formState.emailError}</div>}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className={`form-control ${formState.phoneError ? 'invalid' : ''}`}
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          value={formState.phone}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="phone">Phone Number</label>
                        {formState.phoneError && <div className="text-danger">{formState.phoneError}</div>}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className={`form-control ${formState.passwordError ? 'invalid' : ''}`}
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={formState.password}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="password">Password</label>
                        {formState.passwordError && <div className="text-danger">{formState.passwordError}</div>}
                      </div>
                      
                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit" // Use submit type here
                        >
                          Sign up
                        </button>
                        <br/>
                        <div className="text-center">
                          <p>Already have an account? <a className="small" href="/login">Login</a></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;