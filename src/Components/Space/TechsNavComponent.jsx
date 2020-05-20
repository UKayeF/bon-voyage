import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class TechsNavComponent extends Component {

  render() {

    return (
      <div className="techs-nav">
        <div>
          <div title='Military tech' className='img tech weapons-tech'></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['109']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Shielding tech' className='img tech shield-tech'></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['110']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Armor tech' className='img tech armour-tech'></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['111']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Combustion Drive' className='img tech combustion-drive'></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['115']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Impulse Drive' className='img tech impulse-drive'></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['117']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Hyperspace Drive' className='img tech hyperspace-drive'></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['118']}</span>&nbsp;</div>
        </div>
        <div>
          <div title='Astrophysics' className='img tech astrophysics'></div>
          <div>&nbsp;<span className="text-success">{this.props.techList['124']}</span>&nbsp;</div>
        </div>
      </div>
    )
  }
}

export default TechsNavComponent;