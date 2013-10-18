// quick guessing game
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
var argv = require('optimist')
    .default('max', 10)
    .default('min', 1)
    .default('guesses', 3)
    .argv;

var max = isNaN(argv.max) ? 10 : argv.max;
var min = isNaN(argv.min) ? 1 : argv.min;
var left = isNaN(argv.guesses) ? 3 : argv.guesses;
var prompt = 'Guess a number between ' + min + ' and ' + max + ': ';
var target = Math.floor(Math.random() * (max - min)) + min;

rl.setPrompt('(' + left + ') ' + prompt);
rl.prompt();
rl.on('line', function(line) {
    var guess = Number(line);

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

    if(isNaN(guess)) {
        console.log('Uh ... upwards?');
    }

    rl.setPrompt('(' + left + ') ' + prompt);
    rl.prompt();
}).on('close', function() {
    process.exit(0);
});
