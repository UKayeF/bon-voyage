import React, { Component } from 'react';

import Fleet from '../../Libs/BonVoyage/Model/Fleet';
import ShipListItemComponent from './ShipList/ShipListItemComponent';

class ShipListComponent extends Component {

  validShips = Fleet.allBattleFleet; /* Try not to break the screen size */

  render() {
    return (
      <div className="tbl-active-ships ship-list">
        {this.validShips.map((x, i) =>
          <ShipListItemComponent
            key={"ship-list-"+this.props.module+'-'+x}
            idx={x}
            shipItem={this.props.fleet.shipsExpanded[x]}
            priceList={this.props.priceList}
          />
        )}
      </div>
    )
  }
}

export default ShipListComponent;