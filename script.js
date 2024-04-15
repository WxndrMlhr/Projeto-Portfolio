
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})



var form = document.querySelector(".formulario10")

var mascara = document.querySelector(".mascara10")






function voceclicounobotao() {

    form.style.left = "40%"
    form.style.transform = "translateX (-40%)"
    mascara.style.visibility = "visible"

}

function esconderform() {
    form.style.left = "-300px"
    form.style.transform = "translateX (0)"
    mascara.style.visibility = "hidden"
}




var button = document.querySelector(".btn-contato")

function falecomigo(){

button.style.top = "0"
button,style.transform = "translateY (-10)"

    
}