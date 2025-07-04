import prompt from 'prompt'
import { mainPrompy } from './prompts/prompt-main.js'
import { createQRCode } from './services/qr-code/create.js'
async function main() {
  prompt.start()
  prompt.get(mainPrompy, async (err,choose)=>{
      if(choose.select == 1) await createQRCode()
      if(choose.select == 2)console.log("PASSWORD")
  })
  
}

// qr-code architecture

main()