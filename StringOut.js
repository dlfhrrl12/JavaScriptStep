const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
   const [str, n] = line.split(" ");
   console.log(str.repeat(Number(n)));
 });