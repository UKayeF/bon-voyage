import React, { Component } from 'react';

import SelectorItemComponent from './SelectorItemComponent';
import Fleet from '../../Libs/BonVoyage/Model/Fleet';

class SelectorComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  validShipIds = Fleet.validConstructibleShips;

  selectItem = index => () => this.setState({selectedIndex: index});
  makePreviousAction = index => {
    if (index >= 1) return this.selectItem(index - 1);
    return null;
  }
  makeNextAction = (index, length) => {
    if (index < length - 1) return this.selectItem(index + 1);
    return null;
  }

  render() {

    return (
      <div className='flex-container'>
        {this.validShipIds.map((ship, index, list) =>
          <SelectorItemComponent
            buttonAction={this.props.buttonAction}
            shipsExpanded={this.props.fleet.shipsExpanded}
            tryToAlterShipCount={this.props.tryToAlterShipCount}
            selected={index === this.state.selectedIndex}
            previousAction={this.makePreviousAction(index)}
            nextAction={this.makeNextAction(index, list.length)}
            key={'shipInput-' + ship}
            shipData={this.props.priceList[ship]} shipId={ship}
          />,
        )}
      </div>
    )
  }
}

export default SelectorComponent;
