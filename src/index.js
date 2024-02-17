const Player = require('./player');
const Game = require('./game');
const readline = require('readline');

// Function to create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt user for player attributes 
const getPlayerInput = (playerName, callback) => {
    rl.question(`Enter attributes for ${playerName} (health, strength, attack): `, (input) => {
        const [health, strength, attack] = input.split(' ').map(val => parseInt(val));
        callback({ health, strength, attack });
    });
};

// Function to prompt user for number of sides on the dice to make this code more dynamic.
const getDiceSides = (callback) => {
    rl.question('Enter number of sides on the dice: ', (input) => {
        const sides = parseInt(input);
        callback(sides);
    });
};

// Get player attributes
getPlayerInput('Player A', (playerAAttributes) => {
    getPlayerInput('Player B', (playerBAttributes) => {
        getDiceSides((diceSides) => {
            // Creating players and starting the game
            const playerA = new Player(playerAAttributes.health, playerAAttributes.strength, playerAAttributes.attack);
            const playerB = new Player(playerBAttributes.health, playerBAttributes.strength, playerBAttributes.attack);
            const game = new Game(playerA, playerB, diceSides);
            
            // Start the game
            game.playGame();

            // Close the readline interface
            rl.close();
        });
    });
});
