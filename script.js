const winner_audio = new Audio('champions_league_1.mp3');
const turn_audio = new Audio('mixkit-cartoon-toy-whistle-616.wav');
const opening_audio = new Audio('Super Contra [NES] - Game Over.mp3')
// document.getElementById('turn').innerHTML;


// opening_audio.play();


// Turn changer x to o to x
function changeTurn() {
    return document.getElementById('turn').innerHTML === '<i class="fa-solid fa-x"></i>' ? '<i class="fa-regular fa-circle"></i>' : '<i class="fa-solid fa-x"></i>';
}


// Fn to check winner
const checkWin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let boxes = document.getElementsByClassName('boxicon');
    win.forEach((e) => {
        if (boxes[e[0]].innerHTML === boxes[e[1]].innerHTML && boxes[e[2]].innerHTML === boxes[e[1]].innerHTML && boxes[e[1]].innerHTML !== '') {
            document.getElementById('info').innerHTML = `<b>Winner is ${boxes[e[0]].innerHTML}</b>`;
            winner_audio.play();
            document.querySelector('.gif').getElementsByTagName('img')[0].style.opacity = 1;
        }
    })
}



// game logic
let boxes = document.getElementsByClassName('boxicon');
Array.from(boxes).forEach((e) => {
    e.addEventListener('click', () => {
        if (e.innerHTML === '') {
            e.innerHTML = '<i class="fa-solid fa-x"></i>';
            document.getElementById('turn').innerHTML = changeTurn();
            e.innerHTML = changeTurn();
            turn_audio.play();
            checkWin();
        }
    })
})

// const reset = () => {
//     let boxes = document.getElementsByClassName('boxicon');
//     Array.from(boxes).forEach((e) => {
//         e.innerHTML = '';
//         document.getElementById('turn').innerHTML == '<i class="fa-solid fa-x"></i>'
//     })
// }
