import { observable, action } from 'mobx';

class HeadQuarters {

    static defaultMetal = 50000000;
    static defaultCrystal = 40000000;
    static defaultDeuterium = 10000001;

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
