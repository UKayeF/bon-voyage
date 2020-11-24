import Fleet from './Model/Fleet';
import Battle from '../Ogsim/Battle';
import { DEBRIS_FIELD_PERCENTAGE } from '../../utils/scaling-constants';

class BattleManager {

  static WIN = 1;
  static DRAW = 2;
  static LOST = 3;

  allyFleet = null;
  enemyFleet = null;
  after = null;
  constructor(store){
    this.store = store;
  }

  setAllyFleet(allyFleet){
    this.allyFleet = allyFleet;
  }

  setEnemyFleet(enemyFleet){
    this.enemyFleet = enemyFleet;
  }

  init(after){
    let af = {}, ef = {}, idx;
    for(let i=0;i<Fleet.allBattleFleet.length;i++){
      idx = Fleet.allBattleFleet[i];
      if(this.allyFleet.shipsExpanded[idx].amount)
        af[idx+''] = this.allyFleet.shipsExpanded[idx].amount;
      if(this.enemyFleet.shipsExpanded[idx].amount)
        ef[idx+''] = this.enemyFleet.shipsExpanded[idx].amount;
    }
    let allyObj = {
      fleet: af,
      player_id: '1',
      military_tech: this.allyFleet.techs['109'],
      defense_tech: this.allyFleet.techs['110'],
      hull_tech: this.allyFleet.techs['111']
    };
    let enemyObj = {
      fleet: ef,
      player_id: '2',
      military_tech: this.enemyFleet.techs['109'],
      defense_tech: this.enemyFleet.techs['110'],
      hull_tech: this.enemyFleet.techs['111']
    };
    /*
    let PlayerList = {
        "1" : "Player",
        "2" : "PC"
    }; */

    this.after = after;
    new Battle([allyObj], [enemyObj], window.bvConfig.shipData, window.bvConfig.rapidFire, this.expand );
  }

  calcDebrisField(idx, amount, priceList) {
    const {metal, crystal} = priceList[idx];

    return [metal, crystal].map(x => Math.ceil(x * amount * DEBRIS_FIELD_PERCENTAGE));
  }

  expand = (stats, rounds) => {
    let latestRound = rounds.pop();
    let allyFleet = latestRound.attack_fleet.current[0];
    let enemyFleet = latestRound.defense_fleet.current[0],
      item;
    let current_explosions = 0, ally_difference = 0, enemy_difference = 0;
    let debrisMetal = 0;
    let debrisCrystal = 0;

    //Any survivors?
    for(let i=0; i<allyFleet.length; i++){
      item = allyFleet[i].id;
      current_explosions = (this.store.playerFleet.shipsExpanded[item].amount - allyFleet[i].difference);
      if(current_explosions){
        this.store.playerFleet.shipsExpanded[item].changes = -current_explosions;
        const [metal, crystal] = this.calcDebrisField(item, current_explosions, window.bvConfig.shipData);
        debrisMetal += metal;
        debrisCrystal += crystal;
      }
      ally_difference += allyFleet[i].difference;
    }

    for(let i=0; i<enemyFleet.length; i++){
      item = enemyFleet[i].id;
      current_explosions = (this.store.enemyFleet.shipsExpanded[item].amount - enemyFleet[i].difference);
      if(current_explosions){
        this.store.enemyFleet.shipsExpanded[item].changes = -current_explosions;
        const [metal, crystal] = this.calcDebrisField(item, current_explosions, window.bvConfig.shipData);
        debrisMetal += metal;
        debrisCrystal += crystal;
      }
      enemy_difference += enemyFleet[i].difference;
    }
    const event = this.store.currentEvent;
    const reaperCapacity = this.store.playerFleet.shipsExpanded['221'].amount * 10E3;
    const pathfinderCapacity = this.store.playerFleet.shipsExpanded['222'].amount * 10E3;
    const luneNoireCapacity = this.store.playerFleet.shipsExpanded['216'].amount * 7.5E6;
    const totalCapacity = reaperCapacity + pathfinderCapacity + luneNoireCapacity;
    const harvestedCrystal = Math.min(totalCapacity, debrisCrystal);
    const remainingCapacity = Math.max(totalCapacity - harvestedCrystal, 0);
    const harvestedMetal = Math.min(remainingCapacity, debrisMetal);

    event.metal = harvestedMetal;
    event.crystal = harvestedCrystal;

    //Do something with wins - draws or loses
    if(ally_difference){
      if(enemy_difference){
        this.after(BattleManager.DRAW);
      } else {
        this.after(BattleManager.WIN);
      }
    } else {
      this.after(BattleManager.LOST);
    }
  };
}

export default BattleManager;
