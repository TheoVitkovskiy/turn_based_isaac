import Position from '../../../../models/entity/Position';
import {Action} from '../../../../ts/enums/app_enums';
import EnemyEntity from '../../../../models/entity/EnemyEntity';

export default class FlyNormal extends EnemyEntity {

  public static NAME: string = 'fly_normal';
  public static TITLE: string = 'Normal Fly';
  public static ABBR: string = 'FN';

  protected actionPattern: Array<Action> = [
    Action.MOVE_UP,
    Action.MOVE_UP,
    Action.MOVE_LEFT,
    Action.MOVE_LEFT,
    Action.MOVE_DOWN,
    Action.MOVE_DOWN,
    Action.MOVE_RIGHT,
    Action.MOVE_RIGHT,
  ]; 

  public constructor(
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
