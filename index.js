"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const AdventureGame = () => {
    console.log('Welcome to the Adventure Game!\n');
    console.log('You find yourself in a dark cave.');
    console.log('There are two paths in front of you.');
    rl.question('Do you want to go left or right? ', (answer) => {
        if (answer.toLowerCase() === 'left') {
            console.log('\nYou chose the left path.');
            console.log('You encounter a friendly gnome who gives you a treasure!');
        }
        else if (answer.toLowerCase() === 'right') {
            console.log('\nYou chose the right path.');
            console.log('You fall into a pit and lose the game.');
        }
        else {
            console.log('\nInvalid choice. You stand still and accomplish nothing.');
        }
        rl.close();
    });
};
AdventureGame();
