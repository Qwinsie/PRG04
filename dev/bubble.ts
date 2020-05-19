class Bubble{

    element : HTMLElement
    x : number = 0
    y : number = 0
    width : number = 55
    height : number = 50
    constructor(){
        console.log("Bubble created")

        this.element = document.createElement("bubble")
        this.element.addEventListener("click", () => this.changeState())
        this.randomPosition()
        let game = document.getElementsByTagName("game")[0] // eerste element dat hij tegenkomt ophalen

        game.appendChild(this.element)
    }
    // Random Position
    randomPosition(){
        this.element.style.transform = `translate(${Math.random() * (window.innerWidth - this.width)}px, ${Math.random() * (window.innerHeight - this.height)}px)`
    }
    // State Change
    changeState() {
        this.element.remove()
        // Pop, does not work yet
        let pop
        pop = document.createElement("pop")
            pop.innerHTML = "POP!"
            document.body.appendChild(pop)
            pop.style.transform = `${this.element.style.transform}`
            console.log("pop")
    }
    // Move, does not work yet
    move() {
        this.y -= 1
    }
}