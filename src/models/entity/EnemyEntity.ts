import Entity from './Entity';
import {integer} from '../../ts/types/app_types';
import {Action} from '../../ts/enums/app_enums';
import Position from './Position';

export default abstract class EnemyEntity extends Entity {
  protected abstract actionPattern: Array<Action>;
  private currActionIndex: integer;

  protected constructor(
    name: string,
    title: string,
    abbr: string,
    position: Position
  ) {
    super(
      name,
      title,
      abbr,
      position
    );

    this.currActionIndex = 0;
  }

  public getNextAction(): Action {
    let currActionIndex: integer = this.currActionIndex;

    if (currActionIndex > this.actionPattern.length - 1) {
      currActionIndex = 0;
    }

    const nextAction: Action = this.actionPattern[currActionIndex];

    this.currActionIndex = ++currActionIndex;

    return nextAction;
  }
}
