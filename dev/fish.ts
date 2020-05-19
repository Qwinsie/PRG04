class Fish {

    element : HTMLElement
    x : number = 0
    y : number = 0
    width: number = 130 
    height: number = 110
    constructor() {
        console.log("Fish created")
        this.element = document.createElement("fish")
        this.element.addEventListener("click", () => this.changeState())
        this.changeColor()
        this.randomPosition()
        let game = document.getElementsByTagName("game")[0] // eerste element dat hij tegenkomt ophalen

        game.appendChild(this.element)
    }
    // State Change
    changeState() {
        this.element.classList.add("dead")
    }
    // Color Change
    changeColor(){
        let color = Math.random() * 360
        this.element.style.filter = `hue-rotate(${color}deg)`
    }
    // Random Position
    randomPosition(){
        let randomInt = Math.round(Math.random()) == 0 ? -1 : 1
        this.element.style.transform = `translate(${Math.random() * (window.innerWidth - this.width)}px, ${Math.random() * (window.innerHeight - this.height)}px) scaleX(${randomInt}` // fishDirection
    }
}