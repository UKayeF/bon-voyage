import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {getIconType, makeCSSName, shipsToCode} from '../../utils/shipCodeMap';

@observer
class SelectorItemComponent extends Component {

  render() {
    const shipId = this.props.shipId;
    const imgUrl = window.bvConfig.iconPath + shipId + '.gif';
    const shipName = makeCSSName(shipsToCode.get(parseInt(shipId)));
    const iconType = getIconType(parseInt(shipId));
    const className = `img ${iconType} ${shipName}`
    const selected = this.props.selected ? 'selected' : '';

    return (
      <div className={`selector-item ${selected}`}>
        <div className='container-fluid ship-label'>
          <div className='row'>
            <span className="name">{this.props.shipData.name}</span>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row flex-row'>
            {this.props.previousAction ?
              (<button onClick={this.props.previousAction} className='previous text-error'>«</button>) :
              null
            }
            <div className={className}></div>
            <span className="text-info">{this.props.shipsExpanded[shipId].amount}</span>
            <button className="text-info" onClick={this.addOne}>+1</button>
            <button className="text-info" onClick={this.addTen}>+10</button>
            <button className="text-error" onClick={this.minusOne}>-1</button>
            <button className="text-error" onClick={this.minusTen}>-10</button>
            {this.props.nextAction ?
              (<button onClick={this.props.nextAction} className='next text-error'>»</button>) :
              null
            }
          </div>
        </div>
      </div>
    )
  }

  addOne = (event) => {
    this.changeAmount(this.props.shipsExpanded[this.props.shipId].amount + 1, true);
  };

  addTen = (event) => {
    this.changeAmount(this.props.shipsExpanded[this.props.shipId].amount + 10, true);
  };

  minusOne = (event) => {
    this.changeAmount(this.props.shipsExpanded[this.props.shipId].amount - 1, false);
  };

  minusTen = (event) => {
    this.changeAmount(this.props.shipsExpanded[this.props.shipId].amount - 10, false);
  };

  changeAmount(amount, increasing) {
    this.props.tryToAlterShipCount(this.props.shipId, amount, increasing);
  }
}

export default SelectorItemComponent;
