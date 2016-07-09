import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class EventComponent extends Component {
    render () {
        return (
            <div className={ this.props.visibility ? '' : 'hidden' }>
                <h3>Event title</h3>
                <p>Event message</p>
                <div className="clear"></div>
                <div className="text-center">
                    <button onClick={(e) => this.returnToHome(e)} className="action-red">» PLAY AGAIN?</button>
                </div>
            </div>
        );
    }

    returnToHome(){
        this.props.store.changeState(this.props.store.gameState.home)
    }
}
export default EventComponent;