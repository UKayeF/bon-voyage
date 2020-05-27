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
      <div className='research-lab selector-item'>
        <div className='container-fluid'>
          <div className='row'>
            <span className="name">{this.props.techData.name}</span>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div className={className}></div>
            <span className="text-info">{this.props.store.playerFleet.techs[techId]}</span>
            <span className="text-warning">§ {this.currentPrice}</span>
            <button className="text-success" onClick={this.addOne}>+1</button>
          </div>
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