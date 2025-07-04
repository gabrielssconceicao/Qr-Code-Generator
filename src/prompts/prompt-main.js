import chalk from 'chalk'

export const mainPrompy = [
  {
    name: "select",
    description: chalk.yellow("Escolha a ferramenta: \n 1 - QRCODE \n 2 - PASSWORD \n"),
    pattern: /^[1-2]+/,
    message: chalk.red("Escolha apenas entre 1 e 2:"),
    required: true
  }
]