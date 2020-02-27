import Entity from '../../../models/entity/Entity';
import Position from '../../../models/entity/Position';

export default class EmptySpace extends Entity {

  public static NAME: string = 'empty_space';
  public static TITLE: string = 'Empty Space';
  public static ABBR: string = 'XX';

  constructor(
    position: Position
  ) {
    super(
      EmptySpace.NAME,
      EmptySpace.TITLE,
      EmptySpace.ABBR,
      position
    )
  }
}
