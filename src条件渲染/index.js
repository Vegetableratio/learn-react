import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  render() {
    return <h1>Login</h1>
  }
}
class UnLogin extends React.Component {
  render() {
    return <h1>UnLogin</h1>
  }
}

class Toogel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  handleClick = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    })
  }
  render() {
    return (
      <div>
        {this.state.isLogin ? <Login /> : <UnLogin />}
        <button onClick={this.handleClick}>Toogle isLogin:{this.state.isLogin+''}</button>
      </div>

    )
  }
}




ReactDOM.render(
  <Toogel />,
  document.getElementById('root')
)