console.log("Hello World");

function getComputerChoice() {
    rand = Math.random();
    if (rand >= 0 && rand <= 0.33) {
        string = "rock";
    }
    if (rand >= 0.34 && rand <= 0.66) {
        string = "paper";
    }
    if (rand >= 0.67 && rand <= 1) {
        string = "scissors";
    }

    return string;
}