import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class TechsNavComponent extends Component {

  render() {
    const SHOW_ASTROPHYSICS = false;
    const prefixClassName = name => `img tech ${name} ${this.props.inSpace ? 'xs': ''}`


    return (
      <div className="techs-nav">
        <div>
          <div title='Military tech' className={prefixClassName('weapons-tech')}></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['109']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Shielding tech' className={prefixClassName('shield-tech')}></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['110']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Armor tech' className={prefixClassName('armour-tech')}></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['111']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Combustion Drive' className={prefixClassName('combustion-drive')}></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['115']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Impulse Drive' className={prefixClassName('impulse-drive')}></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['117']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Hyperspace Drive' className={prefixClassName('hyperspace-drive')}></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['118']}</span>&nbsp;</div>
        </div>
        <div className={SHOW_ASTROPHYSICS ? '' : 'hidden'}>
          <div title='Astrophysics' className={prefixClassName('astrophysics')}></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['124']}</span>&nbsp;</div>
        </div>
      </div>
    )
  }
}

export default TechsNavComponent;