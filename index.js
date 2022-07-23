let charArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", ";",
    ":", "'"
]

let firstPassword = document.getElementById("pass1")
genFirstPassword()

let secondPassword = document.getElementById("pass2")
genSecondPassword()

let thirdPassword = document.getElementById("pass3")
genThirdPassword()

let fourthPassword = document.getElementById("pass4")
genFourthPassword()

function shuffleArray() {
    for (let i = charArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = charArray[i]
        charArray[i] = charArray[j]
        charArray[j] = k
    }
    charArray = charArray.slice(0, 14)
    return charArray
}

function genFirstPassword() {
    firstPassword.textContent = shuffleArray().join("")
}

function genSecondPassword() {
    secondPassword.textContent = shuffleArray().join("")
}

function genThirdPassword() {
    thirdPassword.textContent = shuffleArray().join("")
}

function genFourthPassword() {
    fourthPassword.textContent = shuffleArray().join("")
}

function genPassword() {
    genFirstPassword()
    genSecondPassword()
    genThirdPassword()
    genFourthPassword()
}

// Add copy to clipboard functionality

const copyOne = document.getElementById("copy-btn-1")
const copyTwo = document.getElementById("copy-btn-2")
const copyThree = document.getElementById("copy-btn-3")
const copyFour = document.getElementById("copy-btn-4")

// Listen for clicks

copyOne.addEventListener("click", function() {
    navigator.clipboard.writeText(firstPassword.textContent)
    .then(() => {
        alert("Copied")
    })
    .catch(() => {
        alert("Error")
    })
})

copyTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(secondPassword.textContent)
    .then(() => {
        alert("Copied")
    })
    .catch(() => {
        alert("Error")
    })
})

copyThree.addEventListener("click", function() {
    navigator.clipboard.writeText(thirdPassword.textContent)
    .then(() => {
        alert("Copied")
    })
    .catch(() => {
        alert("Error")
    })
})

copyFour.addEventListener("click", function() {
    navigator.clipboard.writeText(fourthPassword.textContent)
    .then(() => {
        alert("Copied")
    })
    .catch(() => {
        alert("Error")
    })
})