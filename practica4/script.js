
let $menuM = document.querySelector(".menuM")
let $menu__button = document.querySelector(".menu__button")
let $menu__button__img = document.querySelector(".menu__button__img")



document.addEventListener("click",(e)=>{

    if(e.target.matches('.menu__button *')){
        $menuM.classList.toggle("menu__show")
        if($menu__button__img.getAttribute("src") === "assets/ðŸ¦† icon _menu hambuger_.png"){
            
            $menu__button__img.setAttribute("src","assets/ðŸ¦† icon _x close delete.png")
        }else{
            $menu__button__img.setAttribute("src","assets/ðŸ¦† icon _menu hambuger_.png")
            
        }
    }
    if(e.target.matches(".menuM__links >*")){
        $menuM.classList.toggle("menu__show")
        $menu__button__img.setAttribute("src","assets/ðŸ¦† icon _menu hambuger_.png")

    }
})