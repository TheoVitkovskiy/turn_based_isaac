import {integer} from 'src/ts/types/app_types';

export default class Stats {
  
  private _damage: integer;
  private _tearDelay: integer;
  private _range: integer;

  constructor(
    damage: integer,
    tearDelay: integer,
    range: integer
  ) {
    this._damage = damage;
    this._tearDelay = tearDelay;
    this._range = range;
  }

  get damage() {
    return this._damage;
  }

  get tearDelay() {
    return this._tearDelay;
  }

  get range() {
    return this._range;
  }
}
