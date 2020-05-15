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

        return(
            <tr className={ (currentAmount || changeAmount) ? '' : 'hidden' }>
                <td className="ship-desc half">
                    { this.props.priceList[x].name }
                </td><td className="one-fifth">
                {/*<img src={ window.bvConfig.iconPath+x+'.gif' }*/}
                {/*     height="20" width="20" />*/}
                <div className={className}></div>
            </td><td><span className="amount">{currentAmount}</span></td>
                <td>{changes}</td>
            </tr>
        );
    }
}

export default ShipListItemComponent;