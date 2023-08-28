import React, { Component } from 'react';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // 在此处添加注册逻辑，包括验证用户名、邮箱格式和密码匹配
    console.log('Registering with:', this.state.username, this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <a href="#" onClick={this.props.togglePage}>Sign In</a></p>
      </div>
    );
  }
}

export default RegisterPage;