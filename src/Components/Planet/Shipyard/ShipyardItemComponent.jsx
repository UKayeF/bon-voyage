import React, { Component } from 'react';
import { observer } from 'mobx-react';

import ExchangeRate from '../../../Libs/BonVoyage/ExchangeRate';
import {getIconType, makeCSSName, shipsToCode} from '../../../utils/shipCodeMap';

@observer
class ShipyardItemComponent extends Component {

    getPrice(){
        return ExchangeRate.resourcesToSpaceCredits(this.props.shipData, ExchangeRate.NORMAL);
    }

    render() {

        const shipId = this.props.shipId;
        // const imgUrl = window.bvConfig.iconPath+shipId+'.gif';
        const shipName = makeCSSName(shipsToCode.get(parseInt(shipId)));
        const iconType = getIconType(parseInt(shipId));
        const className = `img ${iconType} ${shipName}`
        
        return (
            <td>
                <span className="name">{this.props.shipData.name}</span>
                <div className={className}></div>
                {/*<img src={imgUrl} height="48" width="48" />*/}
                <span className="text-info">{this.props.store.playerFleet.shipsExpanded[shipId].amount}</span>
                <small>m {this.props.shipData.metal}</small>
                <small>c {this.props.shipData.crystal}</small>
                <small>d {this.props.shipData.deuterium}</small>
                <table className="mini-buttons" cellPadding="0" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td><button className="text-info" onClick={this.addOne}>+1</button></td>
                    </tr>
                    <tr>
                        <td><button className="text-info" onClick={this.addTen}>+10</button></td>
                    </tr>
                    </tbody>
                </table><br />
                <span className="text-warning">§ {this.getPrice()}</span>
                <table className="mini-buttons" cellPadding="0" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td><button className="text-success" onClick={this.purchaseOne}>+1</button></td>
                    </tr>
                    <tr>
                        <td><button className="text-success" onClick={this.purchaseTen}>+10</button></td>
                    </tr>
                    </tbody>
                </table>
            </td>
        )
    }

    addOne = (event) => {
        this.changeAmount(this.props.store.playerFleet.shipsExpanded[this.props.shipId].amount+1);
    };

    addTen = (event) => {
        this.changeAmount(this.props.store.playerFleet.shipsExpanded[this.props.shipId].amount+10);
    };

    changeAmount(amount){
        this.props.tryToIncreaseItem(this.props.shipId, amount);
    }
    
    purchaseOne = (event) => {
        this.purchaseAmount(1);
    };
    
    purchaseTen = (event) => {
        this.purchaseAmount(10);
    };
    
    purchaseAmount(amount){
        this.props.tryToPurchaseShip(this.props.shipId, amount);
    }
}

export default ShipyardItemComponent;