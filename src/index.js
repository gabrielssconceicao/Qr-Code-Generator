import prompt from 'prompt'
import { mainPrompy } from './prompts/prompt-main.js'
async function main() {
  prompt.start()
  prompt.get(mainPrompy, async (err,choose)=>{
      if(choose.select == 1)console.log("QRCODE")
      if(choose.select == 2)console.log("PASSWORD")
  })

}


main()