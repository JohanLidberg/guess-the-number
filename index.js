function randomInt(){
    return (Math.floor(Math.random() * 100))

}

let secretNumber = randomInt(100)


function getUserGuess () {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}
console.log()

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const guess = getUserGuess
 
        if (guess() > secretNumber) {
            setMessage("För högt")
        }
        else if(guess() == secretNumber) {
            setMessage("Rätt!")
        }
        else {
            setMessage("För lågt")
        }
        {
            clearInput()
        }

    }
})

function setMessage(msg) {
    const message = document.getElementById("message")
    message.innerHTML = msg
}

function clearInput (){
    document.getElementById('user-input').value = ''
    

    
}
  