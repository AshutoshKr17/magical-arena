class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    attackRoll(sides) {
        return Math.floor(Math.random() * sides) + 1; // 1-sides random roll
    }

    defendRoll(sides) {
        return Math.floor(Math.random() * sides) + 1; // 1-sides random roll
    }

    performAttack(opponent, diceSides) {
        const attackRoll = this.attackRoll(diceSides);
        const damageDealt = attackRoll * this.attack;

        const defendRoll = opponent.defendRoll(diceSides);
        const damageDefended = defendRoll * opponent.strength;

        const damageTaken = Math.max(damageDealt - damageDefended, 0);
        opponent.health -= damageTaken;

        return {
            damageDealt,
            damageDefended,
            damageTaken
        };
    }
}

module.exports = Player;
