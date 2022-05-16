let p1Score = 0
let p2Score = 0

// switch version - very broken
// function addP1Score(){
//     switch (p1Score) {
//         case p1Score == 0 || p1Score == 15: p1Score += 15;
//         break;
//         case p1Score == 30: p1Score += 10;
//         break;
//         case p1Score = p2Score: p1Score = "Ad", p2Score = "--";
//         break;
//         case p1Score = Ad || (p1Score = 40 && p2Score !=40): p1Score = "Win!";
//         break;
//         case p1Score = "--": p1Score = "Ad";
//         break;
//         }
//     drawP1Score()
// }


// nested else...if
function addP1Score() {
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
        console.log("condition 4")
        console.log("p1Score is ", p1Score)
        console.log("p2Score is ", p2Score)

        console.log((((p1Score == 40) && (p2Score == 40)) || (p1Score == "--")))
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

    function subP1Score(){
        if(p1Score == 30 || p1Score == 15){
            p1Score -= 15
        }
            else if(p1Score == 40){
                p1Score -= 10
            }
            else{
                p1Score = 0
            }
            drawP1Score()   
    }

    function subP2Score(){
        if(p2Score == 30 || p2Score == 15){
            p2Score -= 15
        }
            else if(p2Score == 40){
                p2Score -= 10
            }
            else{
                p2Score = 0
            }
            drawP2Score()   
    }

function reset(){
    p1Score = 0
    p2Score = 0
    drawP1Score()
    drawP2Score()
}

// Button test function (pass in a hard value unique to each button)
// function clickTest(identifier){
//     console.log("you clicked button", identifier)
// }

function drawP1Score(){
    document.getElementById('scoreP1').innerHTML = p1Score
}
function drawP2Score(){
    document.getElementById('scoreP2').innerHTML = p2Score
}

drawP1Score()
drawP2Score()