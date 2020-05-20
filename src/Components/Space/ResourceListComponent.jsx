import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class ResourceListComponent extends Component {

  static formatTime(time) {
    return new Date(time * 1000).toISOString().substr(14, 5);
  }

  render() {
    let speedClass = '';
    if (this.props.playerFleet.fleetSpeed > 10) {
      speedClass = 'current_capacity';
    } else if (this.props.playerFleet.fleetSpeed < 10) {
      speedClass = 'slow_down';
    }

    return (
      <div>
        <div className="tbl-resources fullwidth">
          <div>
            <div className="resource-img metal small" title='Metal'></div>
            <div>{this.props.playerFleet.metal}</div>
          </div>
          <div>
            <div className="resource-img crystal small" title='Crystal'></div>
            <div>{this.props.playerFleet.crystal}</div>
          </div>
          <div>
            <div className='resource-img deuterium small' title='Deuterium'></div>
            <div><span className="text-error">{this.props.playerFleet.deuterium}</span></div>
          </div>
        </div>
        <div className="tbl-resources">
          <div>
            <div className="half">Capacity</div>
            <div>{this.props.playerFleet.usedCapacity}/{this.props.playerFleet.capacity}</div>
          </div>
          <div>
            <div>Consumption</div>
            <div>{this.props.playerFleet.consumption}</div>
          </div>
          <div>
            <div>Time Unit</div>
            <div>{ResourceListComponent.formatTime(this.props.playerFleet.timeUnit)}</div>
          </div>
          <div>
            <div>Speed</div>
            <div><span className={speedClass}>{this.props.playerFleet.speed}</span></div>
          </div>
          <div>
            <div>Speed %</div>
            <div><span className={speedClass}>{this.props.playerFleet.fleetSpeed}0%</span></div>
          </div>
          <div>
            <div>Distance</div>
            <div><span className="text-info">{this.props.playerFleet.distance.toFixed(2)}</span></div>
          </div>
          <div>
            <div>Ships</div>
            <div>{this.props.playerFleet.shipCount}</div>
          </div>
          <div>
            <div>Space Credits</div>
            <div><span className="text-success">§ {this.props.playerFleet.spaceCredits}</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceListComponent;