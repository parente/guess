// quick guessing game
var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
var argv = require('optimist')
    .default('max', 10)
    .default('guesses', 3)
    .argv;

var max = isNaN(argv.max) ? 10 : argv.max;
var left = isNaN(argv.guesses) ? 3 : argv.guesses;
var prompt = 'Guess a number between 1 and ' + max + ': ';
var target = Math.floor(Math.random() * max) + 1;

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