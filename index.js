const { prompts } = require('./modules/interactive_prompt');

(async () => {
  const characters = [
    {
      'name' : 'isaac',
      'title' : 'Isaac',
      'health' : {
        'red' : 6,
        'blue' : 0
      },
      'damage' : 60,
      'tear_delay' : 100,
      'range' : 100
    },
    {
      'name' : 'blue_baby',
      'title' : 'Blue Baby',
      'health' : {
        'red' : 0,
        'blue' : 6
      },
      'damage' : 70,
      'tear_delay' : 100,
      'range' : 100
    }
  ];

  const pickCharacter = async () => {
    return await prompts({
      type: 'autocomplete',
      name: 'characterSelect',
      message: 'pick your character',
      choices: characters.map(c => ({
        title : c.title,
        value : c.name
      }))
    });
  }

  let playerCharacter = await pickCharacter();
  console.log(playerCharacter);
})();
