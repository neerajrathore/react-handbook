// we import from *export class* in module files
// "type": "module" in package.json to use es module instead of commonjs module in project

import { OpenAI } from 'openai'
// import dotenv from 'dotenv'
// dotenv.config()

const openAIConfig = new OpenAI({
    //enter api key here 
    dangerouslyAllowBrowser: true
})

export default openAIConfig