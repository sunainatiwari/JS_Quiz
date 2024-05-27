let user_score = 0, comp_score = 0
let youwin = true;
let choice = document.querySelectorAll(".btn-class");

let res_user = document.getElementById("userchoice")
let comp_user = document.getElementById("compchoice")
// console.log(choice);

function GenarteCompCh() {
    let options = ["snake", "water", "gun"];
    let compCh = options[Math.floor(Math.random() * 3)]
    return compCh;
}

function updatescore(usersc, compsc) {
    let userchid = document.getElementById("userscore")
    let compchid = document.getElementById("compscore")
    userchid.innerText = usersc;
    compchid.innerText = compsc;
}

function Game_Draw(uscore, cscore) {
    // res_user.innerText = uscore;
    // comp_user.innerText = cscore;
    let resid = document.getElementById("result")
    resid.innerText = "Match draw";
    resid.style.backgroundColor = "yellow"
    resid.style.margin = "20px 20px 20px 20px"
}
function showWin(winstatus) {
    let res = document.getElementById("result")
    if (winstatus == true) {
        res.innerText = "You won"
        res.style.backgroundColor = "lightblue"
        res.style.margin = "20px 20px 20px 20px"
    } else if (winstatus == false) {
        res.innerText = "You lost"
        res.style.backgroundColor = "lightcoral"
        res.style.margin = "20px 20px 20px 20px"
    }
}

function displayChoice(user_ch, comp_ch) {
    res_user.innerText = user_ch;
    comp_user.innerText = comp_ch
}

function playGame(userCh) {
    let compChoice = GenarteCompCh();
    displayChoice(userCh, compChoice)
    if (userCh == compChoice) {
        Game_Draw(user_score, comp_score);
    } else {
        if (userCh == "snake" && compChoice == "water") {
            user_score++;
            youwin = true
        } else if (userCh == "snake" && compChoice == "gun") {
            comp_score++;
            youwin = false
        } else if (userCh == "water" && compChoice == "gun") {
            user_score++;
            youwin = true
        } else if (userCh == "water" && compChoice == "snake") {
            comp_score++;
            youwin = false
        } else if (userCh == "gun" && compChoice == "water") {
            comp_score++;
            youwin = false
        } else if (userCh == "gun" && compChoice == "snake") {
            user_score++;
            youwin = true
        }
        updatescore(user_score, comp_score) //=>OK
        showWin(youwin)// 
    }
}

choice.forEach((ch) => {
    let userch = ch.getAttribute("id")
    ch.addEventListener("click", () => {
        playGame(userch);
    })
})