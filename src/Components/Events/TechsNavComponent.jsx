import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TechsNavComponent extends Component {

  render() {

    return (
      <div className="mini-techs-table-flex">
        <div className="">Military tech</div>
        <div>&nbsp;<span className="text-warning">{this.props.techList['109']}</span>&nbsp;</div>
        <div className="">Shielding tech</div>
        <div>&nbsp;<span className="text-warning">{this.props.techList['110']}</span>&nbsp;</div>
        <div>Armor tech</div>
        <div>&nbsp;<span className="text-warning">{this.props.techList['111']}</span>&nbsp;</div>
      </div>
    )
  }
}

export default TechsNavComponent;
