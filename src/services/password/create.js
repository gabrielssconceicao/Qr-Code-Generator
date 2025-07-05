import chalk from "chalk";
import { handle } from './handler.js';

export async function createPassword() {
  console.log(chalk.green("PASSWORD"));
  const password = await handle()
  console.log(chalk.green(password));
}