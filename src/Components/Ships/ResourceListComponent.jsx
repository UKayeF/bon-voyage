import React, {Component} from 'react';
import {computed} from 'mobx';
import {observer} from 'mobx-react';
import ResourceTable from '../ResourceTable.jsx';


@observer
class ResourceListComponent extends Component {

  @computed get calcUsedCapacity() {
    return Math.min(
      this.props.headQuarters.metal + this.props.headQuarters.crystal + this.props.headQuarters.deuterium,
      this.props.playerFleet.capacity
    );
  }

  render() {

    return (
      <div>
        <ResourceTable
          metal={this.props.headQuarters.metal}
          crystal={this.props.headQuarters.crystal}
          deuterium={this.props.headQuarters.deuterium}
        />
        <div className="tbl-resources fleet-status">
          <div>
            <div className="half">Capacity</div>
            <div>
              <span className={(this.calcUsedCapacity < this.props.playerFleet.capacity) ? 'text-info' : 'text-error'}>
                {this.calcUsedCapacity}
              </span>
              /{this.props.playerFleet.capacity}
            </div>
          </div>
          <div>
            <div>Consumption</div>
            <div>{this.props.playerFleet.consumption}</div>
          </div>
          <div>
            <div>Speed</div>
            <div>{this.props.playerFleet.speed}</div>
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
