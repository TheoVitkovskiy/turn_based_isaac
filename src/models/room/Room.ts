import {RoomPojo, Vector3} from '../../ts/types/app_types';
import Entity from '../../models/entity/Entity';
import NormalRock from '../../models/room/entities/NormalRock';
import EmptySpace from '../../models/room/entities/EmptySpace';
import Position from '../../models/entity/Position';
import Player from '../../models/player/Player';

export default class Room {

  protected entities: Array<Entity>;
  protected player: Player;
  
  constructor(
    initialRoom: RoomPojo,
    player: Player
  ) {
    this.entities = this.createEntitiesFromPojo(initialRoom);
    this.player = player;
  }

  getEntityByAbbr(
    entityAbbr: string,
    positionVector: Vector3
  ) : Entity {
    let entity: Entity;

    const position: Position = new Position(
      positionVector.x,
      positionVector.y,
      positionVector.z
    );

    switch (entityAbbr) {
      case NormalRock.ABBR:
        entity = new NormalRock(position);
        break;
      case EmptySpace.ABBR:
        entity = new EmptySpace(position);
        break;
      default:
        entity = new EmptySpace(position);
    }

    return entity;
  }

  getEntityByPos(
    position: Position
  ) : Entity|undefined {
      return this.entities.find((entity) => entity.position.isEqual(position));
  }

  createEntitiesFromPojo(
    room: RoomPojo
  ) : Array<Entity> {
    const initialLayout = room.initial_layout;
    const entities: Array<Entity> = [];
    for (let z = 0; z < initialLayout.length; z++) {
      for (let y = 0; y < initialLayout[z].length; y++) {
        for (let x = 0; x < initialLayout[z][y].length; x++) {
          const position = new Position(x, y, z);
          const entityAbbr = initialLayout[z][y][x];
          const entity = this.getEntityByAbbr(entityAbbr, position);
          if (entity)
            entities.push(entity); 
        } 
      }
    }
    return entities; 
  }

}
