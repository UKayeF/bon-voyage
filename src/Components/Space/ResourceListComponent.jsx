import React, {Component} from 'react';
import {observer} from 'mobx-react';
import ResourceTable from '../ResourceTable';

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
        <ResourceTable
          metal={this.props.playerFleet.metal}
          crystal={this.props.playerFleet.crystal}
          deuterium={this.props.playerFleet.deuterium}
        />
        <div className="tbl-resources flex-column">
          <div>
            <div>Capacity</div>
            <div className={
              this.props.playerFleet.usedCapacity ===
              this.props.playerFleet.capacity ?
                'text-error' :
                'yellow-text'
            }>
              {this.props.playerFleet.usedCapacity}
              /{this.props.playerFleet.capacity}
            </div>
          </div>
          <div>
            <div>Consumption</div>
            <div className="yellow-text">{this.props.playerFleet.consumption}</div>
          </div>
          <div>
            <div>Time Unit</div>
            <div className="yellow-text">{ResourceListComponent.formatTime(this.props.playerFleet.timeUnit)}</div>
          </div>
          <div>
            <div>Speed</div>
            <div className="yellow-text"><span className={speedClass}>{this.props.playerFleet.speed}</span></div>
          </div>
          <div>
            <div>Speed %</div>
            <div className="yellow-text"><span className={speedClass}>{this.props.playerFleet.fleetSpeed}0%</span></div>
          </div>
          <div>
            <div>Distance</div>
            <div><span className="text-info">{this.props.playerFleet.distance.toFixed(2)}</span></div>
          </div>
          <div>
            <div>Ships</div>
            <div className="yellow-text">{this.props.playerFleet.shipCount}</div>
          </div>
          <div>
            <div>Space Credits</div>
            <div className="yellow-text"><span className="text-success">§ {this.props.playerFleet.spaceCredits}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceListComponent;