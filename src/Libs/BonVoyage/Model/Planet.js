import { observable, action } from 'mobx';

class Planet {

    static planets = {
        "default": {name:"No Name",description:"Unknown Planet",actionStatus:0},
        "onigiri": {name:"Onigiri",description: "First Landmark of our Journey", actionStatus:0},
        "tau-wg": {name:"Tau-WG",description: "Main Confederate Planet", actionStatus:0},
        "alpha-centauri": {name: "Alpha Centauri", description: "Closest Planet to Earth", actionStatus: 0},
        "beta-centauri": {name: "Beta Centauri", description: "Second Closest Planet to Earth", actionStatus: 0},
        "andromeda": {name: "Andromeda", description: "Here we are, Andromeda!", actionStatus: 0 },
    };

    @observable name = '';
    @observable description = '';
    @observable actionStatus = 0;

    @action set(planet){
        this.name = planet.name;
        this.description = planet.description;
        this.actionStatus = planet.actionStatus;
    }

}

export default Planet;
