let p1Score = 0
let p2Score = 0


function addP1Score(){
        if(p1Score == 0 || p1Score == 15){
        p1Score += 15
    }
        else if(p1Score == 30){
            p1Score += 10
        }
        else if(p1Score == "Win!"){
            p1Score = 0
        }
        else{
            p1Score = "Win!"
        }
        drawP1Score()    
    }

    function addP2Score(){
        if(p2Score == 0 || p2Score == 15){
        p2Score += 15
    }
        else if(p2Score == 30){
            p2Score += 10
        }

        else if(p2Score == "Win!"){
            p2Score = 0
        }
        else{
            p2Score = "Win!"
        }
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