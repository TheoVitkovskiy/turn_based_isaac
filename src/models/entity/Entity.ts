import Position from './Position';

export default abstract class Entity {

  protected _name: string;
  protected _title: string;
  protected _abbr: string;
  protected _position: Position;

  protected constructor(
    name: string,
    title: string,
    abbr: string,
    position: Position,
  ) {
    this._name = name;
    this._title = title;
    this._abbr = abbr;
    this._position = position;
  }

  get position() {
    return this._position;
  }

  get name() {
    return this._name;
  }

  get title() {
    return this._title;
  }

  get abbr() {
    return this._abbr;
  }
}
