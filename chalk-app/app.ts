import chalk from "chalk";
console.log(chalk.gray('hello ,world' , "how are you ?"));
console.log(`${chalk.green('hello')} `);
console.log(chalk.green.bgMagenta.italic('hellow'));

function mylog(...args:any[]){
    log(chalk.green(...args));
}
mylog(2+2)