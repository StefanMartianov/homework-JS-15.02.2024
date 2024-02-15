const squareOne = document.querySelector(".square-one")
const squareOneButton = document.querySelector(".square-one-btn")

squareOneButton.addEventListener("click", function (event) {
    squareOne.classList.toggle("square-one-updated")
})

const squareTwo = document.querySelector(".square-two")
const squareTwoButton = document.querySelector(".square-two-btn")

squareTwoButton.addEventListener("click", function (event) {
    squareTwo.classList.toggle("square-two-updated")
    const color = window.getComputedStyle(squareTwo).backgroundColor
    console.log(color);
})

const squareThree = document.querySelector(".square-three")
const squareThreeButton = document.querySelector(".square-three-btn")

squareThreeButton.addEventListener("click", function (event) {
    console.log();
    const rect = squareThree.getBoundingClientRect()
    const width = rect.width 
    const height = rect.height
    squareThree.style.width = `${width + 20}px`
    squareThree.style.height =`${height + 20}px`
})

const root = document.querySelector(".root")
const rootBtn = document.querySelector(".root-btn")

rootBtn.addEventListener("click", function (event) {
    const pElem =  document.createElement("p")
    pElem.className = "p"
    const pText = "Здравствуй"
    pElem.innerText = pText
    root.append(pElem)
} )

const root1 = document.querySelector(".root1")
const rootBtn1 = document.querySelector(".root-btn1")


let prevElem = document.createElement("p")

rootBtn1.addEventListener("click", function (event) {
    const pElem =  document.createElement("p")
    if (prevElem.style.color === "blue") {
        pElem.style.color = "green" 
    } else {
        pElem.style.color = "blue"
    }
    const pText = "Здравствуй"
    pElem.innerText = pText
    root1.append(pElem)
    prevElem = pElem
} )





