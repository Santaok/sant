const template = document.getElementById("cardTemplate").content
const clone = template.cloneNode(true);
document.body.appendChild(clone);
document.querySelector(".add__button").addEventListener("click", function () {
 const inputLink = document.querySelector(".card__url").value
    const inputTitle = document.querySelector(".card__title").value
    if (inputLink) {
    const cardContainer = document.querySelector(".card__block")
    const card = document.createElement("div")
    card.classList.add("block__item")

const cardImage = document.createElement("img")
cardImage.classList.add("card__image")
cardImage.src = inputLink
card.appendChild(cardImage)

const cardTitle = document.createElement("p")
cardTitle.classList.add("block__title")
cardTitle.textContent = inputTitle
card.appendChild(cardTitle)
const likeButton = document.createElement("button")
likeButton.classList.add("like__button")
card.appendChild(likeButton);

const delButton = document.createElement("button")
delButton.classList.add("del__card")
delButton.textContent = "удалить карточку"
card.appendChild(delButton)
cardContainer.appendChild(card)

likeButton.addEventListener("click", () => {
likeButton.classList.toggle("like__button__active")
card.classList.toggle("block__item__active")
})
 delButton.addEventListener("click", () => {
card.remove()
})
}})
const getbtn = document.querySelector(".links")
const blockLink = document.querySelector(".block__url")
getbtn.addEventListener("click", () => {
blockLink.classList.toggle("block__url__active")
})
const delbtnAll = document.querySelector(".delete__button")
delbtnAll.addEventListener("click", () => {
document.querySelector(".card__block").remove()
})

const originalLike = document.querySelector(".like__button")
const borderLike = document.querySelector(".block__item")
originalLike.addEventListener("click", () => {
originalLike.classList.toggle("like__button__active")
})
originalLike.addEventListener("click", () => {
    borderLike.classList.toggle("block__item__active")
})

const originalDel = document.querySelector(".del__card")
originalDel.addEventListener("click", () => {
    originalDel.parentElement.remove()
    })
