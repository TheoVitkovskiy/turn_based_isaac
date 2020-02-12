const prompts = require('prompts');

module.exports.prompts = async ({
  type,
  name,
  message,
  choices
}) => {
  const response = await prompts({
    type,
    name,
    message,
    choices
  })

  return response[name];
}
