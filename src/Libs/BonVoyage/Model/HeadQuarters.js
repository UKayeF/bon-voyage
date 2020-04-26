import { observable, action } from 'mobx';

class HeadQuarters {

    static defaultMetal = 5000000;
    static defaultCrystal = 4000000;
    static defaultDeuterium = 1000001;

    @observable metal = 0;
    @observable crystal = 0;
    @observable deuterium = 0;

    @action reset(){
        this.metal = HeadQuarters.defaultMetal;
        this.crystal = HeadQuarters.defaultCrystal;
        this.deuterium = HeadQuarters.defaultDeuterium;
    }

}

export default HeadQuarters;
