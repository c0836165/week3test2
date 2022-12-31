// paper.install(window);
// paper.setup(document.getElementById('main'));

// var x = 250;
// var y = 10;

// var count = 0;

// var arr = [
//     ["ink", "aid", "bad", "cat", "dog", "eat", "fig", "god", "hat", "jug", "kit", "let", "may", "net", "our", "pet", "rub", "sit", "tag", "urn"],
//     ["able", "acid", "aged", "also", "area", "army", "away", "baby", "ease", "duty", "dual", "edge", "flat", "foot", "feet", "jack", "john", "kill", "look", "luck"],
//     ["Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair"]
// ];

// var text1 = arr[Math.floor(Math.random() * arr.length)];
// var text2 = text1[Math.floor(Math.random() * text1.length)];

// var input = document.getElementById('word').value;
// console.log(input);

// function myFunction() {

//     var input = document.getElementById('word').value;
//     if (input == text2) {
//         count = count + 1;
//     }

//     text1 = arr[Math.floor(Math.random() * arr.length)];
//     text2 = text1[Math.floor(Math.random() * text1.length)];
//     myInterval = setInterval(function() {
//         drop();
//     }, 1);
//     clearInterval(myInterval);
//     document.getElementById('h1').innerHTML = count;
//     console.log(count);
// }


// var myInterval = setInterval(function() {
//     drop();
// }, 1);


// function drop() {
//     project.activeLayer.removeChildren();
//     var text = new PointText(new Point(x, y));
//     // text.justification = 'center';
//     text.fillColor = 'black';
//     text.content = text2;
//     paper.view.draw();
//     if (y < 500) {
//         y = y + 1;
//     } else {
//         y = 10;
//     }
// }

paper.install(window);
paper.setup(document.getElementById('main'));
const header = document.getElementById('header');
const testing = document.getElementById('testing');
var lifeI = document.getElementById('life');
var h1 = document.getElementById('h1');
var count = 0;
var life = 3;
var arr = [
    ["ink", "aid", "bad", "cat", "dog", "eat", "fig", "god", "hat", "jug", "kit", "let", "may", "net", "our", "pet", "rub", "sit", "tag", "urn"],
    ["able", "acid", "aged", "also", "area", "army", "away", "baby", "ease", "duty", "dual", "edge", "flat", "foot", "feet", "jack", "john", "kill", "look", "luck"],
    ["Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair"]
];

let Ranarray = arr[Math.floor(Math.random() * arr.length)];
let ranName = Ranarray[Math.floor(Math.random() * Ranarray.length)];

var x = 250;
var y = 10;
var b = 3;



var myinterval = setInterval(function() {
    motion();
}, 10);

var inputValue = document.getElementById('word')
inputValue.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkInput();
    }
})

function checkInput() {
    var getvalue = inputValue.value;
    if (getvalue == ranName) {

        inputValue.value = "";
        y = 10;
        var s = [10, 20, 25, 30]
        Ranarray = arr[Math.floor(Math.random() * arr.length)];
        ranName = Ranarray[Math.floor(Math.random() * Ranarray.length)];
        myinterval = setInterval(function() {
            motion();
        }, s);
        clearInterval(myinterval);
        count = count + 1;
        document.getElementById('h1').innerHTML = count;

    } else {
        life = life - 1;
        lifeI.value = life;
    }
}

function motion() {


    project.activeLayer.removeChildren();
    var text = new PointText(new Point(x, y));
    text.fillColor = 'black';
    text.content = ranName;

    if (x == 250 && y < 500) {
        y = y + 1;
    }
    if (y == 500) {
        y = 10;
        Ranarray = arr[Math.floor(Math.random() * arr.length)];
        ranName = Ranarray[Math.floor(Math.random() * Ranarray.length)];
        text.content = ranName;
        document.getElementById('b1').innerHTML = b - 1;
        b = b - 1;


    }
    if (b == 0) {

        document.getElementById('h3').innerHTML = `Game Over!!`
        clearInterval(myinterval);

    }



    paper.view.draw();
}