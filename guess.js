var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var max = 10;
var prompt = 'Guess a number between 1 and ' + max + ': ';
var left = 3;
var target = Math.floor(Math.random() * max) + 1;

rl.setPrompt('(' + left + ') ' + prompt);
rl.prompt();

rl.on('line', function(line) {
    var guess;
    try {
        guess = Number(line);
    } catch(e) {
        rl.prompt();
        return;
    }

    if(guess === target) {
        console.log('You got it!');
        rl.close();
    } else if(--left === 0) {
        console.log('Sorry. It was ' + target);
        rl.close();
    } else if(guess < target) {
        console.log('Higher.');
    } else if(guess > target) {
        console.log('Lower.');
    }

    rl.setPrompt('(' + left + ') ' + prompt);
    rl.prompt();
}).on('close', function() {
    process.exit(0);
});