import React from 'react';
import './App.css';
import Square from './components/Square';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      color: false,
    };
  }

  handleClick = () =>
  {
    this.setState((prevState) => ({ color: !prevState.color }));
  };

  render()
  {
    const { color } = this.state;

    return (
      <div className="App">
        <Square color={color} onClick={this.handleClick} />
        <Square color={!color} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
