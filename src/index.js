import prompt from 'prompt'
import { mainPrompt } from './prompts-schema/schema-main.js'
import { createQRCode } from './services/qr-code/create.js'
import { createPassword } from './services/password/create.js'
async function main() {
  prompt.start()
  prompt.get(mainPrompt, async (err,choose)=>{
      if(choose.select == 1) await createQRCode()
      if(choose.select == 2)createPassword()
  })
  
}

// qr-code architecture

main()