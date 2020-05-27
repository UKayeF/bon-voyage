import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TechsNavComponent extends Component {

  render() {
    const prefixClassName = name => `img tech ${name} ${this.props.inSpace ? '': ''}`

    return (

      <div className="mini-techs-table-flex techs-nav">
        <div>
          <div title='Military tech' className={prefixClassName('weapons-tech')}></div>
          <span className="text-success">{this.props.techList['109']}</span>
        </div>
        <div>
          <div title='Shielding tech' className={prefixClassName('shield-tech')}></div>
          <span className="text-success">{this.props.techList['110']}</span>
        </div>
        <div>
          <div title='Armor tech' className={prefixClassName('armour-tech')}></div>
          <span className="text-success">{this.props.techList['111']}</span>
        </div>
      </div>
    )
  }
}

export default TechsNavComponent;
