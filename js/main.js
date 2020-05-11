window.addEventListener("load", () => {
    // fish object
    let fish = {
        width: 130,
        height: 110,
    }
    // bubble object
    let bubble = {
        width:55,
        height: 55,
    }
    // amount of fish & bubbles
    let amount = 20

    // Loop to spawn fish and bubbles.
    for(i=0;i<amount;i++) {
        // Create fish element
        fishElement = document.createElement("fish")
        document.body.appendChild(fishElement)

        // Random Outcome -1 OR 1 for Direction Fish
        let randomInt = Math.round(Math.random()) == 0 ? -1 : 1
        
        // Random fish position (+ preventing fish/bubbles to spawn outside window) + direction & color
        fishElement.style.transform = `translate(${Math.random() * (window.innerWidth - fish.width)}px, ${Math.random() * (window.innerHeight - fish.height)}px) scaleX(${randomInt}`
        fishElement.style.filter = `hue-rotate(${Math.random() * 360}deg)`

        // Create bubble element
        bubbleElement = document.createElement("bubble")
        document.body.appendChild(bubbleElement)
        
        // Random bubble position
        bubbleElement.style.transform = `translate(${Math.random() * (window.innerWidth - bubble.width)}px, ${Math.random() * (window.innerHeight - bubble.height)}px)`
    }
    
    // Click addEventListener
    document.addEventListener("click", (e) => {
        // Create current variable
        let currentTarget = e.target
        // FISH
        if (currentTarget.nodeName == "FISH" && currentTarget.classList == "") { 
            currentTarget.classList.add('dead')
            console.log("kill")
        }
        // BUBBLE
        if (currentTarget.nodeName == "BUBBLE") {
            currentTarget.remove()
            // Add "POP!" at bubble position
            pop = document.createElement("pop")
            pop.innerHTML = "POP!"
            document.body.appendChild(pop)
            pop.style.transform = `${e.target.style.transform}`
            console.log("pop")
        }
    })
})