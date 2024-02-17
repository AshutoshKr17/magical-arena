const Player = require('../src/player');

test('Player should reduce opponent health after attack', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);

    const initialHealth = playerB.health;
    playerA.performAttack(playerB, 6); // 6-sided dice
    expect(playerB.health).toBeLessThan(initialHealth);
});

test('Player attack and defend rolls should be within dice range', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const diceSides = 6;

    const attackRoll = playerA.attackRoll(diceSides);
    const defendRoll = playerB.defendRoll(diceSides);

    expect(attackRoll).toBeGreaterThanOrEqual(1);
    expect(attackRoll).toBeLessThanOrEqual(diceSides);
    expect(defendRoll).toBeGreaterThanOrEqual(1);
    expect(defendRoll).toBeLessThanOrEqual(diceSides);
});
