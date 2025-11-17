const availablePets = [
    "./assets/rock_01.png",
    "./assets/rock_02.png",
    "./assets/rock_03.png"
]


const card = document.querySelector("[data-js-adopt-card]");
const cardImg = card.querySelector("[data-js-bg]");
const rock = card.querySelector("[data-js-rock]")

cardImg.addEventListener("click", () => {

    // pick random source for card img
    let petSrcIndex = Math.floor(Math.random() * availablePets.length)
    rock.src = availablePets[petSrcIndex];

    card.classList.add("clicked");
    cardImg.classList.add("r-half");

    setTimeout(() => {
        cardImg.classList.add("r-full")
        rock.classList.add("r-full");

    }, 500)
})

function reset() {
    cardImg.classList.remove("r-full")
    rock.classList.remove("r-full")
    setTimeout(() => {
        cardImg.classList.remove("r-half")
        card.classList.remove("clicked")
    }, 500)
}