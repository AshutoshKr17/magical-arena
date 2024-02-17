class Game {
    constructor(playerA, playerB, diceSides) {
        this.playerA = playerA;
        this.playerB = playerB;
        this.diceSides = diceSides;
        this.currentPlayer = (playerA.health < playerB.health) ? playerA : playerB;
        this.opponent = (this.currentPlayer === playerA) ? playerB : playerA;
    }

    playTurn() {
        const attackRoll = this.currentPlayer.attackRoll(this.diceSides);
        const defendRoll = this.opponent.defendRoll(this.diceSides);
    
        const damageDealt = attackRoll * this.currentPlayer.attack;
        const damageDefended = defendRoll * this.opponent.strength;
    
        const damageTaken = Math.max(damageDealt - damageDefended, 0);
        this.opponent.health -= damageTaken;
    
        console.log(`${this.currentPlayer.constructor.name} ${this.currentPlayer === this.playerA ? 'A' : 'B'} attacks ${this.opponent.constructor.name} ${this.opponent === this.playerA ? 'A' : 'B'}!`);
        console.log(`Attack Roll: ${attackRoll}`);
        console.log(`Defend Roll: ${defendRoll}`);
        console.log(`Damage Dealt: ${damageDealt}`);
        console.log(`Damage Defended: ${damageDefended}`);
        console.log(`${this.opponent.constructor.name}'s Health: ${this.opponent.health}\n`);
    
        // Swap players for the next turn
        [this.currentPlayer, this.opponent] = [this.opponent, this.currentPlayer];
    }

    playGame() {
        while (this.playerA.health > 0 && this.playerB.health > 0) {
            this.playTurn();
        }

        const winner = (this.playerA.health > 0) ? this.playerA : this.playerB;
        console.log(`${winner.constructor.name} wins the game!`);
    }
}

module.exports = Game;
