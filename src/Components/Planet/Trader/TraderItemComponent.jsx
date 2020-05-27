import React, { Component } from 'react';
import { observer } from 'mobx-react';

import ExchangeRate from '../../../Libs/BonVoyage/ExchangeRate';
import {getIconType, makeCSSName, shipsToCode} from '../../../utils/shipCodeMap';

@observer
class TraderItemComponent extends Component {

  static getBaseTradePrice(idx, exchangeRate){
    return Math.ceil(ExchangeRate.resourcesToSpaceCredits(window.bvConfig.shipData[idx], exchangeRate) * 0.3);
  }

  getTradePrice(){
    return TraderItemComponent.getBaseTradePrice(this.props.shipId, ExchangeRate.NORMAL);
  }

  render() {

    const shipId = this.props.shipId;
    const shipName = makeCSSName(shipsToCode.get(parseInt(shipId)));
    const iconType = getIconType(parseInt(shipId));
    const className = `img ${iconType} ${shipName}`

    return (
      <div>
        <span className="name">{this.props.shipData.name}</span>
        <div className={className}></div>
        <span className="text-info">{this.props.store.playerFleet.shipsExpanded[shipId].amount}</span><br />
        <span className="text-error">§ {this.getTradePrice()}</span>
        <div className="mini-buttons" cellPadding="0" cellSpacing="0">
          <button className="text-error" onClick={this.sellOne}>-1</button>
          <button className="text-error" onClick={this.sellTen}>-10</button>
        </div>
      </div>
    )
  }

  sellOne = (event) => {
    this.sellAmount(1);
  };

  sellTen = (event) => {
    this.sellAmount(10);
  };

  sellAmount(amount){
    this.props.tryToSellShip(this.props.shipId, amount);
  }
}

export default TraderItemComponent;