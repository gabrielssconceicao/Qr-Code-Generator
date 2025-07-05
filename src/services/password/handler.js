import { permittedCharacters } from './utils/permitted-characters.js';

export async function handle() {
  let characters = []
  let password = ""

  
  characters = await permittedCharacters()
  for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
    const index = Math.floor(Math.random() * characters.length)
    password += characters[index];
  }

  return password
}