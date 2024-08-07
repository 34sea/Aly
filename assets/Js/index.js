let cmoHeader = document.querySelector(".cmoHeader")


let percL = document.querySelectorAll(".percL")

let skillContainer = document.querySelector(".skillContainer")

percL.forEach(element => {
    element.style.width = "0%"
    // element.style.overflow = "hidden"
})

document.addEventListener("scroll", ()=>{
    if(window.scrollY>1500){
        cmoHeader.classList.add("menuNFixo")
        cmoHeader.classList.remove("menuFixo")
    }else{
        cmoHeader.classList.add("menuFixo")
        cmoHeader.classList.remove("menuNFixo")
    }
})


let nomeLingP = document.querySelectorAll(".nomeLingP")
let observarEstatistica = new IntersectionObserver((e)=>{
    console.log(e[0].isIntersecting)
    if(e[0].isIntersecting){
        console.log("visivel: ")
        pintar(true)
    }else{
        pintar(false)
        console.log("invisivel: ")
    }

        
})

observarEstatistica.observe(skillContainer)

function pintar(p){
    for(let i=0; i<percL.length; i++){
        if(p){
            percL[i].style.width = (nomeLingP[i].textContent).trim()
            
        }else{
            percL[i].style.width = "0%"
        }
    }
}

let tirar = document.querySelector(".tirar")

let humburguer = document.querySelector(".humburguer")

let menuNav = document.querySelector(".menuNav")
humburguer.addEventListener("click", ()=>{
    menu(true)
})
tirar.addEventListener("click", ()=>{
    menu(false)
})
menuNav.addEventListener("click", ()=>{
    menu(false)
})
let menu = (p)=>{
    if(p){
        menuNav.style.width = "calc(100% - 0px)"
    }else{
        menuNav.style.width = "0px"
    }
}

