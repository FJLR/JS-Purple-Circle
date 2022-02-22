//console.log("hola amigos...!");

const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 5;

let downPressed = false;
let upPressed = false;
let rightPressed = false;
let leftPressed = false;

//Game loop

function drawGame() {
    
    //console.log(drawGame);

    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    limitCheck();
    drawGreenBlob();
    
}

//prevent the blob going away from the margin

function limitCheck() {

    //up
    if ( y < radius) {
        y = radius;
    }

    //down, we could use radius or - 50, either way will work but is better to use the variable 'radius' for dimesion purposes

    if ( y > canvas.height - radius) {
        y = canvas.height - radius; 

    }

   //left 
    if (x < radius) {
        x = radius;

    }


    //right  
    if (x > canvas.width - radius) {
        x = canvas.width - radius;

    }

}





function inputs() {
    if (downPressed) {
        y = y + speed;
    }

    if (upPressed) {
        y = y - speed;
    }

    if (rightPressed) {
        x = x + speed;
    }

    if (leftPressed) {
        x = x - speed;
    }

}

//requestAnimationFrame(func)
//setInterval(drawGame, 1000)



function drawGreenBlob() {
    ctx.fillStyle = "purple";

    if (upPressed) {
        ctx.fillStyle = "red";

    }

    if (downPressed) {
        ctx.fillStyle = "yellow";

    }

    if (rightPressed) {
        ctx.fillStyle = "green";

    }

    if (leftPressed) {
        ctx.fillStyle = "blue";

    }



    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 3)
    ctx.fill();

}

    function clearScreen() {
        ctx.fillStyle = "pink";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
}



document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

// keyDown function
// https://keycode.info/ 

function keyDown(event) {

    //up
    if (event.keyCode == 38) {
        upPressed = true;
    }

    //down 
    if (event.keyCode == 40) {
        downPressed = true;
    }

    //left 
    if (event.keyCode == 37) {
        leftPressed = true;
    }


    //right 
    if (event.keyCode == 39) {
        rightPressed = true;
    }



}


function keyUp(event) {

    //up
    if (event.keyCode == 38) {
        upPressed = false;
    }

    //down 
    if (event.keyCode == 40) {
        downPressed = false;
    }

    //left 
    if (event.keyCode == 37) {
        leftPressed = false;
    }


    //right 
    if (event.keyCode == 39
    ) {
        rightPressed = false;
    }
}

drawGame();




