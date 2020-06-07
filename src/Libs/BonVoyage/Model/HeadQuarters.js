import { observable, action } from 'mobx';
import { INITIAL } from '../../../utils/constants';

class HeadQuarters {

    static defaultMetal = INITIAL.METAL;
    static defaultCrystal = INITIAL.CRYSTAL;
    static defaultDeuterium = INITIAL.DEUTERIUM;

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
