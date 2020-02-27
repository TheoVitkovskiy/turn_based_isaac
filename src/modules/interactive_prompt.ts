import prompts = require('prompts');

interface PromptsObject {
  type: any,
  name: any,
  message: any,
  choices: any[]
} // have to do any, because string is not compatible and I want be abstracted away from the library

export const prompt = async ({
    type,
    name,
    message,
    choices
  } : PromptsObject
) => {
  const response = await prompts({
    type,
    name,
    message,
    choices
  })

  return response[name];
}
