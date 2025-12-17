const carousel = document.querySelector("#carousel");

document.addEventListener("load", ()=>{
    carousel.scrollTo({
        left:300,
        behavior: "smooth",
    })
})