class Player {
 name: string;
 age: number;
 location: string;
 inventory: string[];

 constructor(name: string, age: number, location: string, inventory: string[]) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.inventory = inventory;
 }

 introduce(): void {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I am currently at ${this.location}.`);
 }
}

class Game {
 startGame(): void {
    const player = new Player('Alice', 25, 'Forest', ['Sword', 'Shield']);
    player.introduce();
 }
}

const game = new Game();
game.startGame();
