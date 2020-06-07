import React, { Component } from 'react';

class GamepadItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gamepad = this.props.gamepad;
    const [A, B, X, Y, LB, RB, LT, RT, BACK, START, LS, RS, UP, DOWN, LEFT, RIGHT] = gamepad.buttons;
    const pressed = ({value}) => value ? 'pressed' : '';

    return (
      <div id='gamepad-item'>
        <button id='A' className={pressed(A)}>A</button>
        <button id='B' className={pressed(B)}>B</button>
        <button id='X' className={pressed(X)}>X</button>
        <button id='Y' className={pressed(Y)}>Y</button>
        <button id='UP' className={pressed(UP)}>🠕</button>
        <button id='DOWN' className={pressed(DOWN)}>🠗</button>
        <button id='LEFT' className={pressed(LEFT)}>🠔</button>
        <button id='RIGHT' className={pressed(RIGHT)}>🠖</button>
      </div>
    );
  }
}

export default GamepadItem;
