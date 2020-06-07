import React, { Component } from 'react';
import GamepadItem from './GamepadItem.jsx';

class Gamepad extends Component {
  constructor(props) {
    super(props);
    this.state = { gamepads: [] };
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.setState({gamepads: this.pollGamepads()})
    window.requestAnimationFrame(() => this.tick());
  }

  pollGamepads() {
    return navigator.getGamepads();
  }

  render() {
    const gamepadsSliced = [].slice.call(this.state.gamepads).filter(x => !!x);
    const [firstGamepad] = gamepadsSliced;

    return (
      <div>
        {
          gamepadsSliced.map((gamepad, index) => (
            <GamepadItem gamepad={gamepad} key={index} />
          ))
        }
        {
          this.props.children.map((Component, index) => (
            <Component key={index} gamepad={firstGamepad} />
          ))
        }
      </div>
    );
  }
}

export default Gamepad;
