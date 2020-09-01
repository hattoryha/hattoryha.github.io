
var winningmusic = document.getElementById("winningmusic");
var Wronganswer = document.getElementById("Wronganswer");

const wordEl = document.getElementById("word");

const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll('.figure-part');
const Riddles = ['This is something that you might eat As well as its eggs that it laid', 'This provides meat that you would eat And this is what gives bacon',
'I am known as a king The jungle’s where I reign', 'To eat leaves from tops of trees I don’t have to climb up though With my long neck it’s a breeze']
const words = ['chicken', 'pig', 'lion', 'giraffe'];
var numberOfRiddle = Math.floor(Math.random() * words.length)

let selectedWord = randomWord();
let selectedRiddle = Riddles[numberOfRiddle];
document.getElementById("riddle").innerHTML = selectedRiddle;

let correctLetters = [];

let wrongLetters = [];

// Show the hidden word
function displayWord() {
    
    wordEl.innerHTML = `${selectedWord.split('').map(
        letter=>`
            <span class="letter"> ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')}
        `;
    
    const innerWord = wordEl.innerText.replace(/\n/g,'');
    if(innerWord === selectedWord){
        
        winningmusic.play();
        finalMessage.innerText = 'Congratulation! You won! ';
        popup.style.display = 'flex'
    }

}


displayWord();
//Keydown letter press

addEventListener('keydown',e=>{
    if(e.keyCode>=65 && e.keyCode<=90){

        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                showNotification();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLettersEl();
            }else{
                showNotification();
            }
        }
    }
})

playAgainBtn.addEventListener('click',()=>{
    //Empty the arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);
    popup.style.display='none';
    
    selectedWord = randomWord();
    displayWord();
    updateWrongLettersEl();
})


//Update the wrong letter
function updateWrongLettersEl(){
    //display wrong letter
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length>0?'<p>Wrong</p>': ''}
        ${wrongLetters.map(letter=>`<span>${letter}</span>`)}
    `;


    //display part-figure
    figureParts.forEach((part,index)=>{
        const errors = wrongLetters.length;

        if(index<errors){
            part.style.display = 'block';
        }else
            part.style.display = 'none';
    });

    //Check if lost
    if(wrongLetters.length ===figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost';
        popup.style.display = 'flex';
        Wronganswer.play();
    }
}

//Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(()=>{
        notification.classList.remove('show');
    },2000);
}


function randomWord(){
        return words[numberOfRiddle];
}









// function wordDisplay(){
//     let n = selectedWord.length;
//     for(let i=0;i<n;i++){
//         let textNode = correctLetters.includes(selectedWord[i])?selectedWord[i]:'';
//         let span = `<span class="letter">${textNode}</span>`;
//         wordEl.insertAdjacentHTML('beforeend',span);
//     }
// }
// wordDisplay();
