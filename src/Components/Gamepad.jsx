import React, { Component } from 'react';
import GamepadItem from './GamepadItem.jsx';
import HomeComponent from './HomeComponent';
import SelectShipsComponent from './SelectShipsComponent';
import SpaceComponent from './SpaceComponent';
import PlanetComponent from './PlanetComponent';
import EventComponent from './EventComponent';
import BadEndingComponent from './BadEndingComponent';
import GoodEndingComponent from './GoodEndingComponent';

class Gamepad extends Component {
  constructor(props) {
    super(props);
    this.state = { gamepads: [] };
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.setState({ gamepads: this.pollGamepads() })
    window.requestAnimationFrame(() => this.tick());
  }

  pollGamepads() {
    return navigator.getGamepads();
  }

  render() {
    const gamepadsSliced = [].slice.call(this.state.gamepads).filter(x => !!x);
    const [firstGamepad] = gamepadsSliced;
    const visibility = this.props.visibilityObject;
    const { store, debug } = this.props;

    return (
      <div>
        {
          gamepadsSliced.map((gamepad, index) => (
            <GamepadItem gamepad={gamepad} key={index}/>
          ))
        }
        <div id="holder">
          <HomeComponent
            visibility={visibility.home}
            store={store}
            gamepad={firstGamepad}
          />
          <SelectShipsComponent
            priceList={window.bvConfig.shipData}
            headQuarters={store.headQuarters}
            visibility={visibility.ships}
            store={store}
            gamepad={firstGamepad}
          />
          <SpaceComponent
            visibility={visibility.space}
            priceList={window.bvConfig.shipData}
            store={store}
            gamepad={firstGamepad}
          />
          <PlanetComponent
            priceList={window.bvConfig.shipData}
            store={store}
            visibility={visibility.planet}
            gamepad={firstGamepad}
          />
          <EventComponent
            visibility={visibility.event}
            priceList={window.bvConfig.shipData}
            store={store}
            gamepad={firstGamepad}
          />
          <BadEndingComponent
            visibility={visibility.badEnding}
            store={store}
            gamepad={firstGamepad}
          />
          <GoodEndingComponent
            visibility={visibility.goodEnding}
            priceList={window.bvConfig.shipData}
            store={store}
            gamepad={firstGamepad}
          />

        </div>
        {debug}
      </div>
    );
  }
}

export default Gamepad;
