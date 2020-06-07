import React, { Component } from 'react';
import { observer } from 'mobx-react';

import GameState from './Libs/BonVoyage/Model/GameState';

import DebugBar from './Components/Debug/DebugBar';
import Gamepad from './Components/Gamepad';

@observer
class App extends Component {

    render() {
        let store = this.props.appStore;

        let visibility = {
            home: (store.currentState==GameState.states.home),
            ships: (store.currentState==GameState.states.ships),
            space: (store.currentState==GameState.states.space),
            event: (store.currentState==GameState.states.event),
            planet: (store.currentState==GameState.states.planet),
            badEnding: (store.currentState==GameState.states.badEnding),
            goodEnding: (store.currentState==GameState.states.goodEnding)
        };

        let debug = store.debugMode ? <DebugBar store={store} state={store.state} /> : '';

        return <Gamepad visibilityObject={visibility} store={store} debug={debug} />;
    }
}

export default App;
