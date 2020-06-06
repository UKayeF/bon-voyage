import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { getIconType, makeCSSName, shipsToCode } from '../../../utils/shipCodeMap';

@observer
class ShipListItemComponent extends Component {
  render() {
    let x = this.props.idx,
      currentAmount = this.props.shipItem.amount,
      changeAmount = this.props.shipItem.changes;
    const shipName = makeCSSName(shipsToCode.get(parseInt(x)));
    const iconType = getIconType(parseInt(x));
    const className = `img small ${iconType} ${shipName}`
    let changes = '';
    if (changeAmount > 0) {
      changes = <span className="text-success">+{changeAmount}</span>
    }
    else if (changeAmount < 0) {
      changes = <span className="text-error">{changeAmount}</span>
    }

    return (
      <div className={(currentAmount || changeAmount) ? 'ship-item' : 'hidden'}>
        <div className='ship-name-amount'>
        <span className='ship-desc'>
          {this.props.priceList[x].name}
        </span>
          <span className='amount'>{currentAmount}</span>
          <div>{changes}</div>
        </div>
        <div className='img-container'>
          <div className={className}></div>
        </div>
      </div>
    );
  }
}

export default ShipListItemComponent;
