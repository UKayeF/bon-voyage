import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import ExchangeRate from '../../../Libs/BonVoyage/ExchangeRate';
import {getIconType, makeCSSName, shipsToCode} from '../../../utils/shipCodeMap';

@observer
class ResearchLabItemComponent extends Component {

  @computed get currentPrice(){
    const basePrice = ExchangeRate.resourcesToSpaceCredits(this.props.techData, ExchangeRate.NORMAL);

    return ResearchLabItemComponent.calcPrice(
      basePrice,
      this.props.techData.factor,
      this.props.store.playerFleet.techs[this.props.techId]+1);
  }

  render() {
    const techId = this.props.techId;
    const techName = makeCSSName(shipsToCode.get(parseInt(techId)));
    const iconType = getIconType(parseInt(techId));
    const className = `img ${iconType} ${techName}`


    return (
      <div className='research-lab'>
        <span className="name">{this.props.techData.name}</span>
        <div className={className}></div>
        <span className="text-info">{this.props.store.playerFleet.techs[techId]}</span><br />
        <span className="text-warning">§ {this.currentPrice}</span>
        <div className="mini-buttons" cellPadding="0" cellSpacing="0">
          <button className="text-success" onClick={this.addOne}>+1</button>
        </div>
      </div>
    )
  }

  static calcPrice(basePrice, factor, desiredLevel){
        //console.log("base price",(basePrice * Math.pow( factor, ( desiredLevel - 1 ) ) ) );
    return (basePrice * Math.pow( factor, ( desiredLevel - 1 ) ) );
  }

  addOne = (event) => {
    this.props.tryToPurchaseItem(this.props.techId);
  }
}

export default ResearchLabItemComponent;