import dogs from "/data.js"
import Dog from "/Dog.js"

let isWaiting = false
let dog = getNewProfile()
render()

function getNewProfile(){
    const nextDogData = dogs.shift()
    dogs.push(nextDogData)
    return new Dog(nextDogData)
}

function render(){
    const profile = document.getElementById("profile")
    profile.innerHTML = dog.getDogHtml()
    profile.style.backgroundImage = dog.getDogBG()
}

document.getElementById("btn-dislike").addEventListener("click", () => {
    if(!isWaiting){
        dog.dislike()
        buttonClicked()
    }
})

document.getElementById("btn-like").addEventListener("click", () => {
    if(!isWaiting){
        dog.like()
        buttonClicked()
    }
})

function buttonClicked(){
    isWaiting = true
    render()
    dog = getNewProfile()

    setTimeout(()=>{
        isWaiting = false
        render()
    }, 1000)
}
