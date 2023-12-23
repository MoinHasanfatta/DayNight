let fullPage = document.getElementById("page")

console.log(fullPage)

function sunMoon(){
    fullPage.classList.toggle('night')
    fullPage.style.transition = '4s'
}