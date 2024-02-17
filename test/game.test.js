const Player = require('../src/player');
const Game = require('../src/game');

test('Game should correctly determine current player', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const game = new Game(playerA, playerB, 6); // 6-sided dice

    expect(game.currentPlayer).toBe(playerA);
});

test('Game should end when one player\'s health reaches 0', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const game = new Game(playerA, playerB, 6); // 6-sided dice

    game.playGame(); // Simulate game until one player wins

    expect(playerA.health).toBeGreaterThan(0);
    expect(playerB.health).toBeLessThanOrEqual(0);
});
