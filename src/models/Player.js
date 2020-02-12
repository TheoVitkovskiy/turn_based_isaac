'use strict';

const { prompts } = require('../modules/interactive_prompt');
const characters = require('../resources/characters');

module.exports = class Player {

    constructor() {
      return (async () => {
        const pickCharacter = async () => {
          const characterName = await prompts({
            type: 'autocomplete',
            name: 'characterSelect',
            message: 'pick your character',
            choices: characters.map(c => ({
              title: c.title,
              value: c.name
            }))
          });
          return characters.find(c => c.name === characterName); 
        }

          const character = await pickCharacter();
          
          this.name = character.name;
          this.health = character.health;
          this.damage = character.damage;
          this.tear_delay = character.tear_delay;
          this.range = character.range;

          return this;
        }
        
      )();

  }

  getDamage() {
    return this.damage;
  }

}
