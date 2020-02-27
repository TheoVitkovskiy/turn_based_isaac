import {integer} from 'src/ts/types/app_types';

export default class Consumables {

  private _keys : integer;
  private _bombs : integer;
  private _coins : integer;

 public constructor(
    keys : integer,
    bombs : integer,
    coins : integer
  ) {
    this._keys = keys;
    this._bombs = bombs;
    this._coins = coins;
  }
  
  get keys(){
    return this._keys;
  }

  get bombs(){
    return this._bombs;
  }

  get coins(){
    return this._coins;
  }
}
