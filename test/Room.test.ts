import {RoomPojo} from '../src/ts/types/app_types'
import { expect } from 'chai';
import Room from '../src/models/room/Room';
import NormalRock from '../src/models/room/entities/NormalRock';
import EmptySpace from '../src/models/room/entities/EmptySpace';
import Position from '../src/models/entity/Position';
import Entity from '../src/models/entity/Entity';
import Player from '../src/models/player/Player';
import characters from '../src/resources/characters';

describe('Room', () => {
  describe('create initial', () => {
    const roomPOJO: RoomPojo = {
      initial_layout : [
        [
          ['XX', 'XX', 'XX', 'XX', 'XX', 'XX', 'XX'],  
          ['OO', 'XX', 'XX', 'XX', 'XX', 'XX', 'OO'],  
          ['XX', 'XX', 'XX', 'XX', 'XX', 'XX', 'XX'],  
          ['XX', 'XX', 'XX', 'XX', 'XX', 'XX', 'XX'],  
          ['XX', 'XX', 'XX', 'XX', 'XX', 'XX', 'XX'],  
          ['OO', 'XX', 'XX', 'XX', 'XX', 'XX', 'OO'],  
          ['XX', 'XX', 'XX', 'XX', 'XX', 'XX', 'XX'],  
        ],
        [
          ['--', 'RN', 'FR', '--', 'FR', 'RN', '--'],  
          ['OO', 'RN', '--', '--', '--', 'RN', 'OO'],  
          ['RN', 'RN', '--', '--', '--', 'RN', 'RN'],  
          ['--', '--', '--', 'EF', '--', '--', '--'],  
          ['RN', 'RN', '--', '--', '--', 'RN', 'RN'],  
          ['OO', 'RN', '--', '--', '--', 'RN', 'OO'],  
          ['--', 'RN', 'FR', '--', 'FR', 'RN', '--'],  
        ], 
        [
          ['--', '--', '--', '--', '--', '--', '--'],  
          ['EF', '--', '--', '--', '--', '--', 'EF'],  
          ['--', '--', '--', '--', '--', '--', '--'],  
          ['--', '--', '--', 'EF', '--', '--', '--'],  
          ['--', '--', '--', '--', '--', '--', '--'],  
          ['EF', '--', '--', '--', '--', '--', 'EF'],  
          ['--', '--', '--', '--', '--', '--', '--'],  
        ], 
      ] 
    }

    let room: Room;

    beforeEach(() => {
      room = new Room(
        roomPOJO,
        Player.createFromPojo(characters[0])
      );
    })
    
    // EF - Enemy Fly
    // EM - Enemy Maggot
    // FR - Fire Red
    // RN - Rock Normal
    // XX - Floor Tile
    // OO - Abyss Tile

    describe('getEntityByPos', () => {

      it('should return correct values', () => {
        const normalRock: Entity|undefined = room.getEntityByPos(
          new Position(1, 0, 1)
        );

        expect(normalRock).to.be.instanceof(NormalRock);

        const emptySpace: Entity|undefined = room.getEntityByPos(
          new Position(6, 0, 0)
        );

        expect(emptySpace).to.be.instanceof(EmptySpace);
      })

      it('should return `undefined` in case provided with a position that does not exist', () => {
        const entity: Entity|undefined = room.getEntityByPos(
          new Position(100, 0, 5)
        );

        expect(entity).to.be.undefined;
      })

    })

    describe('nextTurn)', () => {
//     it('it should move all entities to new positions', () => {
//        room.nextTurn(); 
//
//
//        const entity: Entity|undefined = room.getEntityByPos(
//          new Position(1, 0, 1)
//        );
//
//        expect(entity?.name).to.be.equal(NormalRock.NAME);
//      })
    })
  })
})
