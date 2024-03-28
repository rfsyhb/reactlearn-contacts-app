import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailChange = (e) => {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  };

  onPasswordChange = (e) => {
    this.setState(() => {
      return {
        password: e.target.value,
      };
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <form className="login-input" onSubmit={this.onSubmitHandler}>
        <input
          type="email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button>Masuk</button>
      </form>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;