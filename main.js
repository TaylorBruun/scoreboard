let p1Score = 0
let p2Score = 0
var tieMode = 0


// NOTE I forgot how deuce/advantage works so the scoreboard is working exactly as intended, but my intent was incorrect.

// nested else...if
function addP1Score() {
    if (tieMode == 0) {
        if (p1Score == 0 || p1Score == 15) {
            p1Score += 15
            console.log("condition 1")
        }
        else if (p1Score == 30) {
            p1Score += 10
            console.log("condition 2")
        }
        else if (p1Score == "Win!") {
            p1Score = 0
            console.log("condition 3")
        }
        else if (((p1Score == 40) && (p2Score == 40)) || (p1Score == "--")) {
            p1Score = "Ad"
            p2Score = "--"
        }
        else if (((p1Score == 40) && (p2Score !== 40)) || (p1Score == "Ad")) {
            p1Score = "Win!"
            console.log("condition 5")
        }
        else {
            p1Score == ":("
            console.log("condition 6")
        }
        drawP1Score()
        drawP2Score()
    }
    else{
        if((p1Score == 7) && (p1Score > (p2Score + 1))){
            p1Score = "Win!"
            drawP1Score()
        }
        else{
            p1Score ++
            drawP1Score()
        }
    }
}

function addP2Score() {
    if (p2Score == 0 || p2Score == 15) {
        p2Score += 15
    }
    else if (p2Score == 30) {
        p2Score += 10
    }

    else if (p2Score == "Win!") {
        p2Score = 0
    }
    else if (((p2Score == 40) && (p2Score == 40)) || (p2Score == "--")) {
        p2Score = "Ad"
        p1Score = "--"
    }
    else if (((p2Score == 40) && (p1Score !== 40)) || (p2Score == "Ad")) {
        p2Score = "Win!"
    }
    else {
        p2Score == ":("

    }
    drawP1Score()
    drawP2Score()
}

function subP1Score() {
    if (p1Score == 30 || p1Score == 15) {
        p1Score -= 15
    }
    else if (p1Score == 40) {
        p1Score -= 10
    }

    else {
        p1Score = 0
    }
    drawP1Score()
}

function subP2Score() {
    if (p2Score == 30 || p2Score == 15) {
        p2Score -= 15
    }
    else if (p2Score == 40) {
        p2Score -= 10
    }
    else {
        p2Score = 0
    }
    drawP2Score()
}

function reset() {
    p1Score = 0
    p2Score = 0
    drawP1Score()
    drawP2Score()
}

// Button test function (pass in a hard value unique to each button)
// function clickTest(identifier){
//     console.log("you clicked button", identifier)
// }

function resetP1(){
    p1Score = 0
    drawP1Score()
}

function resetP2(){
    p2Score = 0
    drawP2Score()
}

function enterTiebreak() {
    
    if (tieMode == 0) {
        p1Score = 0
        p2Score = 0
        tieMode = 1
        drawP1Score()
        drawP2Score()
        
    }
    else {
        p1Score = 0
        p2Score = 0
        tieMode = 0
        drawP1Score()
        drawP2Score()
    }
}


function drawP1Score() {
    document.getElementById('scoreP1').innerHTML = p1Score
}
function drawP2Score() {
    document.getElementById('scoreP2').innerHTML = p2Score
}

drawP1Score()
drawP2Score()