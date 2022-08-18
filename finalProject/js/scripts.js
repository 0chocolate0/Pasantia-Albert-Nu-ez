
let $modal = document.querySelector(".modal");
let $user_modal = document.querySelector(".user_modal")
let $tabla = document.querySelector(".tabla")



document.addEventListener("click",(e)=>{
  if(e.target.matches(".personal__btn")){
    $modal.classList.add("modal_show")
  }
  if(e.target.matches(".close")){
    $modal.classList.remove("modal_show")
  }
  if(e.target.matches(".profile-photo  *")){
    $user_modal.classList.toggle("modal_show")
  }
  if(e.target.matches(".user_row") || e.target.matches(".user_row > *")){
    $user_modal.classList.remove("modal_show")
  }

  console.log(e.target)
})

let $theme = document.querySelector(".theme");
let $side = document.querySelector(".sidebar");
let $dash = document.querySelector(".dash")
let $set = document.querySelector(".set")
let $paid = document.querySelector(".paid")
let $person = document.querySelector(".person")



$theme.addEventListener("click",()=>{
  document.body.classList.toggle('dark-theme')
  if($tabla.getAttribute("src") === "/finalProject/assets/tabNara.svg"){
    $tabla.setAttribute("src","/finalProject/assets/none.svg")
  }else{
    $tabla.setAttribute("src","/finalProject/assets/tabNara.svg")
    
  }
  $theme.querySelector('.luz').classList.toggle('active')
  $theme.querySelector('.oscu').classList.toggle('active')
})


document.addEventListener('click',(e)=>{
if(e.target.matches(".sidebar > a")){
    if($side.classList.contains("active")){
        $side.classList.remove("active")
    }
    if($dash.classList.contains("active")){
        $dash.classList.remove("active")
    }
    if($paid.classList.contains("active")){
        $paid.classList.remove("active")
    }
    if($person.classList.contains("active")){
        $person.classList.remove("active")
    }
    if($set.classList.contains("active")){
        $set.classList.remove("active")
    }
    e.target.classList.add("active")

}

})