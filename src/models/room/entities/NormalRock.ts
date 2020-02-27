import Entity from '../../../models/entity/Entity';
import Position from '../../../models/entity/Position';

export default class NormalRock extends Entity {

  public static NAME: string = 'rock_normal';
  public static TITLE: string = 'Normal Rock';
  public static ABBR: string = 'RN';

  constructor(
    position: Position
  ) {
    super(
      NormalRock.NAME,
      NormalRock.TITLE,
      NormalRock.ABBR,
      position
    )
  }
}
