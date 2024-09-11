interface IGames {
    name: string,
    health: number,
    power: number
}

interface IPlayer {
    player1: IGames[];
    player2: IGames[];
}

//callback for calculating the health and power
// const fnCalculate = (health: number, power: number) => {
//     let currentHealth: number = 100;
//     let currentPower: number = 10;

//     return {
//         currentHealth += health,
//         currentPower += power
//     }
// }

// function showStatus(name: string, health: number, power: number, fn) {
//     return console.log(`status ${name} currently ${fn(health, power)}`)
// }

class TwoPlayer implements IGames {
    name: string;
    health: number;
    power: number;

    constructor(paraName: string, paraHealth: number = 100, paraPower: number = 10) {
        this.name = paraName;
        this.health = paraHealth;
        this.power = paraPower;
    };

    hit(power: number) {
        this.health -= power;
    };

    useItem(item: { health: number, power: number }) {
        this.health += item.health;
        this.power += item.power;
    };

    showStatus() {
        console.log(`Player${this.name} (Health => ${this.health},Power => ${this.power} )`)
    };

};

class shootingGame {
    player1: TwoPlayer;
    player2: TwoPlayer;

    constructor(paramPlayer1: TwoPlayer, paramPlayer2: TwoPlayer) {
        this.player1 = paramPlayer1;
        this.player2 = paramPlayer2;
    };

    getRandomItem() {
        return {
            health: Math.random() < 0.5 ? 10 : 0,
            power: Math.random() < 0.5 ? 10 : 0
        };
    };

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            this.player1.showStatus();
            this.player2.showStatus();

            this.player1.hit(this.player1.power);
            this.player2.hit(this.player1.power);
        }

        if (this.player1.health > 0) {
            console.log(`Player ${this.player1.name} wins!`);
        } else {
            console.log(`Player ${this.player2.name} wins!`)
        }
    }
}

const player1 = new TwoPlayer('Player A');
const player2 = new TwoPlayer('Player B')

const game = new shootingGame(player1, player2);
game.start()