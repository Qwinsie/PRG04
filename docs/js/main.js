"use strict";
var Bubble = (function () {
    function Bubble() {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.width = 55;
        this.height = 50;
        console.log("Bubble created");
        this.element = document.createElement("bubble");
        this.element.addEventListener("click", function () { return _this.changeState(); });
        this.randomPosition();
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
    }
    Bubble.prototype.randomPosition = function () {
        this.element.style.transform = "translate(" + Math.random() * (window.innerWidth - this.width) + "px, " + Math.random() * (window.innerHeight - this.height) + "px)";
    };
    Bubble.prototype.changeState = function () {
        this.element.remove();
        var pop;
        pop = document.createElement("pop");
        pop.innerHTML = "POP!";
        document.body.appendChild(pop);
        pop.style.transform = "" + this.element.style.transform;
        console.log("pop");
    };
    Bubble.prototype.move = function () {
        this.y -= 1;
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.width = 130;
        this.height = 110;
        console.log("Fish created");
        this.element = document.createElement("fish");
        this.element.addEventListener("click", function () { return _this.changeState(); });
        this.changeColor();
        this.randomPosition();
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
    }
    Fish.prototype.changeState = function () {
        this.element.classList.add("dead");
    };
    Fish.prototype.changeColor = function () {
        var color = Math.random() * 360;
        this.element.style.filter = "hue-rotate(" + color + "deg)";
    };
    Fish.prototype.randomPosition = function () {
        var randomInt = Math.round(Math.random()) == 0 ? -1 : 1;
        this.element.style.transform = "translate(" + Math.random() * (window.innerWidth - this.width) + "px, " + Math.random() * (window.innerHeight - this.height) + "px) scaleX(" + randomInt;
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("game created");
        this.fish = new Fish;
        this.bubble = new Bubble;
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.bubble.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map