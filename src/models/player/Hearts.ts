import {integer} from 'src/ts/types/app_types';

export default class Hearts {

  private _red : integer;
  private _blue : integer;

  constructor(
    red : integer,
    blue : integer
  ) {
    this._red = red;
    this._blue = blue;
  }

  get red(){
    return this._red;
  }

  get blue(){
    return this._blue;
  }
}
