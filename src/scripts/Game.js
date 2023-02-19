class Game {
    constructor() {
      // Au début du jeu, la faith est à zéro
      this.faith = 0;
      setInterval(() => {
        this.update(); // Appel de la fonction update toutes les secondes
      }, 1000);
    }

    update() {
        this.faith += 1;
        document.getElementById("faithcounter").innerHTML = this.faith;
    }
}

function main() {
    const game = new Game();
}

main();