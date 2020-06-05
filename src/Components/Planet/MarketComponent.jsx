import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import ExchangeRate from '../../Libs/BonVoyage/ExchangeRate';

@observer
class MarketComponent extends Component {

  tenthsMetal = ExchangeRate.resourcesToSpaceCredits({ metal: 10000, crystal: 0, deuterium: 0 }, ExchangeRate.MEDIUM);
  tenthsCrystal = ExchangeRate.resourcesToSpaceCredits({ metal: 0, crystal: 10000, deuterium: 0 }, ExchangeRate.MEDIUM);
  tenthsDeuterium = ExchangeRate.resourcesToSpaceCredits({
    metal: 0,
    crystal: 0,
    deuterium: 10000,
  }, ExchangeRate.MEDIUM);

  @observable success = false;
  @observable validating = false;
  @observable validatingCapacity = false;

  render() {

    return (
      <div className={this.props.visibility ? '' : 'hidden'}>
        <h4>Resource Market</h4>
        <p>You can exchange your Space Credits for resources here</p>
        <div className="market-resources">
          <div id='resource-market-metal'>
            <div className='resource-img small metal' title='Metal'></div>
            <div className="mid-buttons" cellPadding="0" cellSpacing="0">
              <div>
                <span className="text-warning">§ {this.tenthsMetal}</span>
                <button className="text-info" onClick={this.addTM}>+10000</button>
              </div>
              <div>
                <span className="text-warning">§ {this.tenthsMetal * 10}</span>
                <button className="text-info" onClick={this.addHM}>+100000</button>
              </div>
              <div>
                <span className="text-warning">§ {this.tenthsMetal * 100}</span>
                <button className="text-info" onClick={this.addKM}>+1000000</button>
              </div>
            </div>
          </div>
          <div id='resource-market-crystal'>
            <div className='resource-img small crystal' title='Crystal'></div>
            <div className="mid-buttons" cellPadding="0" cellSpacing="0">
              <div>
                <span className="text-warning">§ {this.tenthsCrystal}</span>
                <button className="text-info" onClick={this.addTC}>+10000</button>
              </div>
              <div>
                <span className="text-warning">§ {this.tenthsCrystal * 10}</span>
                <button className="text-info" onClick={this.addHC}>+100000</button>
              </div>
              <div>
                <span className="text-warning">§ {this.tenthsCrystal * 100}</span>
                <button className="text-info" onClick={this.addKC}>+1000000</button>
              </div>
            </div>
          </div>
          <div id='resource-market-deuterium'>
            <div className='resource-img small deuterium' title='Deuterium'></div>
            <div className="mid-buttons" cellPadding="0" cellSpacing="0">
              <div>
                <span className="text-warning">§ {this.tenthsDeuterium}</span>
                <button className="text-info" onClick={this.addTD}>+10000</button>
              </div>
              <div>
                <span className="text-warning">§ {this.tenthsDeuterium * 10}</span>
                <button className="text-info" onClick={this.addHD}>+100000</button>
              </div>
              <div>
                <span className="text-warning">§ {this.tenthsDeuterium * 100}</span>
                <button className="text-info" onClick={this.addKD}>+1000000</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br/>
          <span className={this.success ? 'text-success' : 'hidden'}>Thanks for buying!</span>
          <span className={this.validatingCapacity ? 'text-error' : 'hidden'}>Not enough Tank Capacity!</span>
          <span className={this.validating ? 'text-error' : 'hidden'}>Not enough Space Credits!</span>
        </div>
      </div>
    );
  }

  addResources(resources, price) {

    this.success = false;
    this.validating = false;
    this.validatingCapacity = false;

    if (resources.metal + resources.crystal + resources.deuterium
      > this.props.store.playerFleet.capacity - this.props.store.playerFleet.usedCapacity) {

      this.validatingCapacity = true;

    }
    else if (price > this.props.store.playerFleet.spaceCredits) {

      this.validating = true;

    }
    else {
      this.props.store.playerFleet.spaceCredits -= price;
      this.props.store.playerFleet.metal += resources.metal;
      this.props.store.playerFleet.crystal += resources.crystal;
      this.props.store.playerFleet.deuterium += resources.deuterium;

      this.success = true;
    }
    setTimeout(() => {
      this.validatingCapacity = false;
      this.validating = false;
      this.success = false;
    }, 3000);

  }

  addTM = () => {
    this.addResources({ metal: 10000, crystal: 0, deuterium: 0 }, this.tenthsMetal);
  };

  addHM = () => {
    this.addResources({ metal: 100000, crystal: 0, deuterium: 0 }, this.tenthsMetal * 10);
  };

  addKM = () => {
    this.addResources({ metal: 1000000, crystal: 0, deuterium: 0 }, this.tenthsMetal * 100);
  }

  addTC = () => {
    this.addResources({ metal: 0, crystal: 10000, deuterium: 0 }, this.tenthsCrystal);
  };

  addHC = () => {
    this.addResources({ metal: 0, crystal: 100000, deuterium: 0 }, this.tenthsCrystal * 10);
  };

  addKC = () => {
    this.addResources({ metal: 0, crystal: 1000000, deuterium: 0 }, this.tenthsCrystal * 100);
  }

  addTD = () => {
    this.addResources({ metal: 0, crystal: 0, deuterium: 10000 }, this.tenthsDeuterium);
  };

  addHD = () => {
    this.addResources({ metal: 0, crystal: 0, deuterium: 100000 }, this.tenthsDeuterium * 10);
  };

  addKD = () => {
    this.addResources({ metal: 0, crystal: 0, deuterium: 1000000 }, this.tenthsDeuterium * 100);
  }
}

export default MarketComponent;
