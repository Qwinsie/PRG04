class Game {

    fish : Fish
    bubble : Bubble
    constructor(){
        console.log("game created")
        this.fish = new Fish
        this.bubble = new Bubble

        this.gameLoop()
    }

    gameLoop() {
        this.bubble.move() // Does not work yet
        
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())