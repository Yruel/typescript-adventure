import Scene = Phaser.Scene;
import Pointer = Phaser.Input.Pointer;
import GameObject = Phaser.GameObjects.GameObject;

export default class HelloWorldScene extends Scene {

    private mouse?: Pointer;
    private player?: GameObject

    constructor() {
        super('adventure')
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('player', 'assets/star.png')
    }

    create() {
        this.add.image(400, 300, 'background');
        this.player = this.physics.add.sprite(400, 400, 'player').setScale(4);
        this.mouse = this.input.mousePointer;
    }

    update() {
        if (this.player) {
            if (this.mouse?.isDown) {
                this.physics.moveToObject(this.player, this.mouse, 100);
            }
        }
    }
}
