function rolldiceOne() {
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;

    // then I use the push method of an two dimensional array,
    var dices = [];
    dices.push(d1);
    dices.push(d2);
    dices.push(d3);

    // I add the slice method for selecting elements
    var d1 = Number(dices.slice(0, 1));
    var d2 = Number(dices.slice(1, 2));
    var d3 = Number(dices.slice(2, 3));

    document.getElementById("dice1").innerHTML = d1;
    document.getElementById("dice2").innerHTML = d2;
    document.getElementById("dice3").innerHTML = d3;

    var status = d1 + d2 + d3;

    document.getElementById("statusOne").innerHTML = "You rolled " + status + " .";
}

function rolldiceTwo() {

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;

    // then I use the push method of an two dimensional array,
    var dices = [];
    dices.push(d1);
    dices.push(d2);
    dices.push(d3);

    // I add the slice method for selecting elements
    var d1 = Number(dices.slice(0, 1));
    var d2 = Number(dices.slice(1, 2));
    var d3 = Number(dices.slice(2, 3));

    document.getElementById("dice4").innerHTML = d1;
    document.getElementById("dice5").innerHTML = d2;
    document.getElementById("dice6").innerHTML = d3;

    var status = d1 + d2 + d3;

    document.getElementById("statusTwo").innerHTML = "You rolled " + status + ".";
}

var color = new Array();

color[0] = "#E8D37D";
color[1] = "#EFE08D";
color[2] = "#DDBB59";
color[3] = "#D5AE47";


function changeColor() {
    var randomColor = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[randomColor];

}

function wanttoplayOne() {
    var text = prompt("Enter your Name");
    document.getElementById("spielStart1").innerHTML = text;
}

function wanttoplayTwo() {
    var text = prompt("Enter your Name");
    document.getElementById("spielStart2").innerHTML = text;
}
