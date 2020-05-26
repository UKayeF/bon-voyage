import React, {Component} from 'react';
import {computed} from 'mobx';
import {observer} from 'mobx-react';


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
        <div className="tbl-resources fullwidth">
          <div>
            <div className="resource-img metal small" title='Metal'></div>
            <div className='metal'>{this.props.headQuarters.metal}</div>
          </div>
          <div>
            <div className="resource-img crystal small" title='Crystal'></div>
            <div className='crystal'>{this.props.headQuarters.crystal}</div>
          </div>
          <div>
            <div className='resource-img deuterium small' title='Deuterium'></div>
            <div><span className="metal text-error">{this.props.headQuarters.deuterium}</span></div>
          </div>
        </div>
        <div className="tbl-resources fleet-status">
          <div>
            <div className="half">Capacity</div>
            <div><span
              className={(this.calcUsedCapacity < this.props.playerFleet.capacity) ? 'text-info' : 'text-error'}>
                                    {this.calcUsedCapacity}</span>/{this.props.playerFleet.capacity}</div>
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