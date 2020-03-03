import React from 'react';
import ReactDOM from 'react-dom';

// 简单组件
/*
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="React" />,
  document.getElementById('root')
);
*/


// 有状态组件
/*
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);
*/

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       posts: [],
//       comments: [],
//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         posts: [1, 2, 3]
//       });
//     }, 2000);
//     setTimeout(() => {
//       this.setState({
//         comments: [3, 2, 1]
//       });
//     }, 2000);
//   }
//   componentWillUnmount() {
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.posts}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );



class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick=({a},e)=> {
    console.log(a,  e)
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={(e)=>this.handleClick({a:1,b:2},e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
