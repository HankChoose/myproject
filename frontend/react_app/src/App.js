import React, { Component } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginPage: true, // 默认显示登录页面
    };
  }

  togglePage = () => {
    // 切换登录和注册页面
    this.setState((prevState) => ({
      isLoginPage: !prevState.isLoginPage,
    }));
  };

  render() {
    const { isLoginPage } = this.state;

    return (
      <div>
        <h1>Your App</h1>
        {isLoginPage ? (
          <LoginPage togglePage={this.togglePage} />
        ) : (
          <RegisterPage togglePage={this.togglePage} />
        )}
      </div>
    );
  }
}

export default App;
