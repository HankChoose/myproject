import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // 在此处添加登录逻辑，包括验证邮箱格式
    console.log('Logging in with:', this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Email or Username"
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
          <button type="submit">Login</button>
        </form>
        <p>Forgot your password? <a href="#">Reset it here.</a></p>
        <p>Don't have an account yet? <a href="#" onClick={this.props.togglePage}>Create Account</a></p>
      </div>
    );
  }
}

export default LoginPage;