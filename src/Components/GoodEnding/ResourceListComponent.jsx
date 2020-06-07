import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ResourceTable from '../ResourceTable.jsx';

@observer
class ResourceListComponent extends Component {

  static formatTime(time) {
    return new Date(time * 1000).toISOString().substr(14, 5);
  }

  render() {
    return (
      <div>
        <ResourceTable
          metal={this.props.playerFleet.metal}
          crystal={this.props.playerFleet.crystal}
          deuterium={this.props.playerFleet.deuterium}
        />
        <div className="tbl-resources final-score">
          <div>
            <div>Score</div>
            <span className="current_capacity">{this.props.store.score}</span>
          </div>
          <div>
            <div>Time Unit</div>
            <div>{ResourceListComponent.formatTime(this.props.playerFleet.timeUnit)}</div>
          </div>
          <div>
            <div>Speed</div>
            <span>{this.props.playerFleet.speed}</span>
          </div>
          <div>
            <div>Ships</div>
            <div>{this.props.playerFleet.shipCount}</div>
          </div>
          <div>
            <div>Space Credits</div>
            <span className="text-success">§ {this.props.playerFleet.spaceCredits}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceListComponent;
