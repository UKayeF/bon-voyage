import React, {Component} from 'react';
import {observer} from 'mobx-react';

import ExchangeRate from '../../../Libs/BonVoyage/ExchangeRate';
import {getIconType, makeCSSName, shipsToCode} from '../../../utils/shipCodeMap';

@observer
class ShipyardItemComponent extends Component {

  getPrice() {
    return ExchangeRate.resourcesToSpaceCredits(this.props.shipData, ExchangeRate.NORMAL);
  }

  render() {

    const shipId = this.props.shipId;
    // const imgUrl = window.bvConfig.iconPath+shipId+'.gif';
    const shipName = makeCSSName(shipsToCode.get(parseInt(shipId)));
    const iconType = getIconType(parseInt(shipId));
    const className = `img ${iconType} ${shipName}`

    return (
      <div className='selector-item'>
        <div className='container-fluid ship-label'>
          <div className='row'>
            <span className="name">{this.props.shipData.name}</span>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div className={className}></div>
            <span className="text-info">{this.props.store.playerFleet.shipsExpanded[shipId].amount}</span>
            <div className='flex-column'>
              <small>m {this.props.shipData.metal}</small>
              <small>c {this.props.shipData.crystal}</small>
              <small>d {this.props.shipData.deuterium}</small>
            </div>
            <button className="text-info" onClick={this.addOne}>+1</button>
            <button className="text-info" onClick={this.addTen}>+10</button>
            <button className="text-info" onClick={this.addHundred}>+100</button>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div>
              <span className="text-warning">§ {this.getPrice()}</span>
            </div>
            <button className="text-success" onClick={this.purchaseOne}>+1</button>
            <button className="text-success" onClick={this.purchaseTen}>+10</button>
            <button className="text-success" onClick={this.purchaseHundred}>+100</button>
          </div>
        </div>
      </div>
    )
  }

  addOne = (event) => {
    this.changeAmount(this.props.store.playerFleet.shipsExpanded[this.props.shipId].amount + 1);
  };

  addTen = (event) => {
    this.changeAmount(this.props.store.playerFleet.shipsExpanded[this.props.shipId].amount + 10);
  };

  addHundred = (event) => {
    this.changeAmount(this.props.store.playerFleet.shipsExpanded[this.props.shipId].amount + 100);
  }

  changeAmount(amount) {
    this.props.tryToIncreaseItem(this.props.shipId, amount);
  }

  purchaseOne = (event) => {
    this.purchaseAmount(1);
  };

  purchaseTen = (event) => {
    this.purchaseAmount(10);
  };

  purchaseHundred = (event) => {
    this.purchaseAmount(100);
  };

  purchaseAmount(amount) {
    this.props.tryToPurchaseShip(this.props.shipId, amount);
  }
}

export default ShipyardItemComponent;