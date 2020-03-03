import React from 'react';
import ReactDOM from 'react-dom';

class Li extends React.Component {
  render() {
    return <li>{this.props.no}</li>
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: Array(9).fill(2)
    }
  }
  double = () => {
    this.setState({
      list: this.state.list.map(ele => ele ** 2)
    })
  }
  render() {
    const list = this.state.list;
    return (
      <div>
        <ul>
          {
            list.map((ele, index) => <Li key={index} no={ele} />)
          }
        </ul>
        <button onClick={this.double}>加倍</button>
      </div>
    )
  }
}

ReactDOM.render(
  <List />,
  document.getElementById('root')
)