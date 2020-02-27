import {PlayerPojo} from '../../ts/types/app_types';
import { prompt } from '../../modules/interactive_prompt';
import characters from '../../resources/characters';
import Entity from '../../models/entity/Entity';
// TODO: should be vector3
import Position from '../../models/entity/Position'; 
import Consumables from './Consumables';
import Hearts from './Hearts';
import Stats from './Stats';
import {Direction} from '../../ts/enums/app_enums';

export default class Player extends Entity {

  public static ABBR: string = 'NP';

  private _hearts : Hearts;
  private _stats : Stats;
  private _consumables : Consumables;

  private constructor(
    name: string,
    title: string,
    position: Position,
    hearts: Hearts,
    stats: Stats,
    consumables: Consumables
  ) {
    super(
      name,
      title,
      Player.ABBR,
      position
    );
    this._hearts = hearts;
    this._stats = stats;
    this._consumables = consumables;
  }

  get hearts() {
    return this._hearts;
  }

  get consumables() {
    return this._consumables;
  }

  get stats() {
    return this._stats;
  }

  public move(direction: Direction): void {
    switch(direction) {
      case Direction.UP:
        this.position.y -= 1;
        break;
      case Direction.DOWN:
        this.position.y += 1;
        break;
      case Direction.LEFT:
        this.position.x -= 1;
        break;
      case Direction.RIGHT:
        this.position.x += 1;
        break;
    }
  }

  static async createFromCli() : Promise<Player> {
    const pickCharacter = async () : Promise<PlayerPojo> => {
      const characterName: string = await prompt({
        type: 'autocomplete',
        name: 'characterSelect',
        message: 'pick your character',
        choices: characters.map((c: PlayerPojo) => ({
          title: c.title,
          value: c.name
        }))

      });

      return characters.find(
        (c: PlayerPojo) => c.name === characterName
      ) || characters[0]; // a potential bug source, but should never happen
    }

    return Player.createFromPojo(
      await pickCharacter()
    );
  }

  static createFromPojo(
    c: PlayerPojo
  ) : Player {
    return new this(
      c.name,
      c.title,
      new Position(
        7,
        7,
        1
      ),
      new Hearts(
        c.hearts.red,
        c.hearts.blue,
      ),
      new Stats(
        c.stats.damage,
        c.stats.tear_delay,
        c.stats.range,
      ),
      new Consumables(
        c.consumables.keys,
        c.consumables.bombs,
        c.consumables.coins,
      ),
    );
  }
}
