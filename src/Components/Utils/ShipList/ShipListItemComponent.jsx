import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {getIconType, makeCSSName, shipsToCode} from '../../../utils/shipCodeMap';

@observer
class ShipListItemComponent extends Component {
  render(){
    let x = this.props.idx,
    currentAmount = this.props.shipItem.amount,
    changeAmount = this.props.shipItem.changes;
    const shipName = makeCSSName(shipsToCode.get(parseInt(x)));
    const iconType = getIconType(parseInt(x));
    const className = `img small ${iconType} ${shipName}`
    let changes = '';
    if(changeAmount > 0){
      changes = <span className="text-success">+{changeAmount}</span>
    } else if(changeAmount < 0){
      changes = <span className="text-error">{changeAmount}</span>
    }

    return (
      <div className={ (currentAmount || changeAmount) ? 'ship-item' : 'hidden' }>
        <div className="ship-desc half">
          { this.props.priceList[x].name }
        </div>
        <div className="one-fifth">
          <div className={className}></div>
        </div>
        <div>
          <span className="amount">{currentAmount}</span>
        </div>
        <div>{changes}</div>
      </div>
    );
  }
}

export default ShipListItemComponent;