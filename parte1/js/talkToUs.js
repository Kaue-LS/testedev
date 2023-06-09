function activeIcon() {
    const container = document.querySelector(".talkToUs")
    container?.classList?.add("active")
    const image = container?.querySelector("img")
    image.src = '../assets/svg/whatsappIcon.svg'
}
function deactivateIcon() {
    const container = document.querySelector(".talkToUs")
    container?.classList?.remove("active")
    const image = container.querySelector("img")
    image.src = "../assets/svg/serieIcon.svg"
}