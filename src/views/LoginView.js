import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/authOperations";

class LoginView extends Component {
  loginInitialState = {
    email: "",
    password: "",
  };
  state = {
    ...this.loginInitialState,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    //const { email, password } = this.state;
    this.props.onLogin({ ...this.state });
    //this.setState({...this.loginInitialState})
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className=" container">
        <section className="wrapper ">
          <h1>Login page</h1>
          <form onSubmit={this.handleSubmit} className="form">
            <label>
              {/* Email */}
              <input
                className="input"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter email"
              ></input>
            </label>
            <label>
              {/* Password */}
              <input
                className="input"
                type="password"
                value={password}
                onChange={this.handleChange}
                name="password"
                placeholder="Enter password"
              ></input>
            </label>
            <button type="submit" className="addContact-button signIn-button">
              Sign in
            </button>
          </form>
        </section>
      </div>
    );
  }
}
export default connect(null, { onLogin: authOperations.login })(LoginView);
