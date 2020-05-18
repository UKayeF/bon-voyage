import React, { Component } from 'react';

import SelectorItemComponent from './SelectorItemComponent';
import Fleet from '../../Libs/BonVoyage/Model/Fleet';

class SelectorComponent extends Component {

  validShipIds = Fleet.validConstructibleShips;

  render() {

    return (
      <div className={'flex-container'}>
        {this.validShipIds.map((x, i) =>
          <SelectorItemComponent
            shipsExpanded={this.props.fleet.shipsExpanded}
            tryToAlterShipCount={this.props.tryToAlterShipCount}
            key={'shipInput-' + x}
            shipData={this.props.priceList[x]} shipId={x}
          />,
        )}
      </div>
    )
  }
}

export default SelectorComponent;
