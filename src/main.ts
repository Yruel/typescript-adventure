import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import GameConfig = Phaser.Types.Core.GameConfig;
import Game = Phaser.Game;
import AdventureScene from "~/scenes/AdventureScene";

const config: GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: true
		}
	},
	// scene: [HelloWorldScene]
	scene: [AdventureScene]
}

export default new Game(config)
