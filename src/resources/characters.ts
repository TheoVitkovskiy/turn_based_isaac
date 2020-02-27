import {PlayerPojo} from 'src/ts/types/app_types';

const characters:PlayerPojo[]  = [
  {
    'name' : 'isaac',
    'title' : 'Isaac',
    'hearts' : {
      'red' : 6,
      'blue' : 0
    },
    'stats' : {
      'damage' : 60,
      'tear_delay' : 100,
      'range' : 100
    },
    'consumables' : {
      'keys' : 1,
      'bombs' : 0,
      'coins' : 0
    },
    'position' : {
      'x' : 7,
      'y' : 7,
      'z' : 1
    }
  },
  {
    'name' : 'blue_baby',
    'title' : 'Blue Baby',
    'hearts' : {
      'red' : 0,
      'blue' : 6
    },
    'stats' : {
      'damage' : 70,
      'tear_delay' : 100,
      'range' : 120
    },
    'consumables' : {
      'keys' : 0,
      'bombs' : 1,
      'coins' : 3
    },
    'position' : {
      'x' : 7,
      'y' : 7,
      'z' : 1
    }
  },
]

export default characters;
