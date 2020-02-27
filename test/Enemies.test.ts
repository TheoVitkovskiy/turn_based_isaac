import { expect } from 'chai'
import FlyNormal from '../src/models/room/entities/enemies/FlyNormal'
import Position from '../src/models/entity/Position'
import { Action } from '../src/ts/enums/app_enums'

describe('Enemies', () => {
  it('should work for multiple cycles', () => {
      const flyNormal: FlyNormal = new FlyNormal(
        new Position(6, 6, 2)
      );
      const actionPattern: Array<Action> = [
        Action.MOVE_UP,
        Action.MOVE_UP,
        Action.MOVE_LEFT,
        Action.MOVE_LEFT,
        Action.MOVE_DOWN,
        Action.MOVE_DOWN,
        Action.MOVE_RIGHT,
        Action.MOVE_RIGHT,
        Action.MOVE_UP,
        Action.MOVE_UP,
        Action.MOVE_LEFT,
        Action.MOVE_LEFT,
        Action.MOVE_DOWN,
        Action.MOVE_DOWN,
        Action.MOVE_RIGHT,
        Action.MOVE_RIGHT,
        Action.MOVE_UP,
      ]; 
      actionPattern.forEach(
        (action: Action) => {
          const nextAction: Action = flyNormal.getNextAction();
          expect(nextAction).to.be.equal(action)
        }           
      );
  });

  describe('FlyNormal', () => {
    describe('getNextMove()', () => {
      let flyNormal: FlyNormal;
      let actionPattern: Array<Action>;

      beforeEach(() => {
        flyNormal = new FlyNormal(
          new Position(6, 6, 2)
        );
      })
      afterEach(() => {
        actionPattern.forEach(
          (action: Action) => {
            const nextAction: Action = flyNormal.getNextAction();
            expect(nextAction).to.be.equal(action)
          }           
        );
      })
      it('should work for one cycle', () => {
        actionPattern = [
          Action.MOVE_UP,
          Action.MOVE_UP,
          Action.MOVE_LEFT,
          Action.MOVE_LEFT,
          Action.MOVE_DOWN,
          Action.MOVE_DOWN,
          Action.MOVE_RIGHT,
          Action.MOVE_RIGHT,
        ]; 
      }) 
    })
  })
})
