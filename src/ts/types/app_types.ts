// types
export type integer = number;

// interfaces
export interface RoomPojo {
    initial_layout: Array<Array<Array<string>>> 
}

export interface Vector3 {
  x: integer,
  y: integer,
  z: integer
}

export interface EntityPojo {
  name: string,
  title: string,
  position: Vector3
}

export interface PlayerPojo extends EntityPojo {
  hearts: HeartsPojo,
  stats: StatsPojo,
  consumables: ConsumablesPojo
}

interface HeartsPojo {
  red: integer,
  blue: integer
}

interface StatsPojo {
  damage: integer,
  tear_delay: integer,
  range: integer
}

interface ConsumablesPojo {
  keys: integer,
  bombs: integer,
  coins: integer
}
