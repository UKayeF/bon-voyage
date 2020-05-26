import React, {Component} from 'react';
import {computed} from 'mobx';
import {observer} from 'mobx-react';
import ResourceTable from '../ResourceTable';

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
        <table className="tbl-resources">
          <tbody>
          <tr>
            <th>Score</th>
            <th><span className="current_capacity">{this.props.store.score}</span></th>
          </tr>
          <tr>
            <th>Time Unit</th>
            <td>{ResourceListComponent.formatTime(this.props.playerFleet.timeUnit)}</td>
          </tr>
          <tr>
            <th>Speed</th>
            <td><span>{this.props.playerFleet.speed}</span></td>
          </tr>
          <tr>
            <th>Ships</th>
            <td>{this.props.playerFleet.shipCount}</td>
          </tr>
          <tr>
            <th>Space Credits</th>
            <td><span className="text-success">§ {this.props.playerFleet.spaceCredits}</span></td>
          </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default ResourceListComponent;