import Position from '../../../models/entity/Position';
import {Direction} from '../../../ts/enums/app_enums';
import EnemyEntity from '../../../models/entity/EnemyEntity';

export default class FlyNormal extends EnemyEntity {

  public static NAME: string = 'fly_normal';
  public static TITLE: string = 'Normal Fly';
  public static ABBR: string = 'FN';

  protected movementPattern: Array<Direction> = [
    Direction.UP,
    Direction.UP,
    Direction.LEFT,
    Direction.LEFT,
    Direction.DOWN,
    Direction.DOWN,
    Direction.RIGHT,
    Direction.RIGHT
  ]; 

  constructor(
    position: Position
  ) {
    super(
      FlyNormal.NAME,
      FlyNormal.TITLE,
      FlyNormal.ABBR,
      position
    )
  }
}
