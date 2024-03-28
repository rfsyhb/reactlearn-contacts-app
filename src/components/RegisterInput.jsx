import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  };

  onEmailChange = (event) => {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  };

  onPasswordChange = (event) => {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <form className="register-input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button>Register</button>
      </form>
    );
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
