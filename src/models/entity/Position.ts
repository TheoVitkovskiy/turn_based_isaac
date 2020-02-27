import {integer} from '../../ts/types/app_types';

export default class Position {

  private _x: integer;
  private _y: integer;
  private _z: integer;
  
  constructor(
    x: integer, 
    y: integer, 
    z: integer
  ) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get z() {
    return this._z;
  }

  set x(x: integer) {
    this._x = x;
  }

  set y(y: integer) {
    this._y = y;
  }

  set z(z: integer) {
    this._z = z;
  }

  isEqual(position: Position) {
    return (
      this.x === position.x &&
      this.y === position.y &&
      this.z === position.z
    )  
  }
}
