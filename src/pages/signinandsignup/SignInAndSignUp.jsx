import React, { Component } from "react";

export default class SignInAndSignUp extends Component {
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
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
