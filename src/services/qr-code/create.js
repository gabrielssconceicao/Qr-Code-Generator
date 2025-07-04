import prompt from 'prompt'
import {promptSchemaQRCode} from '../../prompts/prompt-qr-code.js'
import { handle } from './handle.js';
export async function createQRCode() {
  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}