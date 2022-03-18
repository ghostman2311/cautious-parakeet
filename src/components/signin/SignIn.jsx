import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./signin.scss";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Login with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            title="Email"
            value={email}
            handleChange={this.handleChange}
            required
            type="email"
          />
          <FormInput
            name="password"
            title="Password"
            value={password}
            handleChange={this.handleChange}
            required
            type="password"
          />
          <CustomButton type="submit" title="Submit" />
        </form>
      </div>
    );
  }
}
