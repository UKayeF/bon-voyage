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
        <span className='ship-desc'>
          { this.props.priceList[x].name }
        </span>
        <div className=''>
          <div className={className}></div>
        </div>
        <span className='amount'>{currentAmount}</span>
        <div>{changes}</div>
      </div>
    );
  }
}

export default ShipListItemComponent;