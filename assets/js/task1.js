
let openIcon = document.querySelector(".open-icon")
let closeIcon = document.querySelector(".close-icon")
let sidebar = document.getElementById("sidebar-from-left")

openIcon.addEventListener("click",function(){
    sidebar.classList.remove("hide-sidebar-from-left");
    this.classList.add("d-none");
    closeIcon.classList.remove("d-none")
});
closeIcon.addEventListener("click",function(){
    sidebar.classList.add("hide-sidebar-from-left")
    this.classList.add("d-none");
    openIcon.classList.remove("d-none")
});


let input = document.querySelector(".inputs input");
// input.addEventListener("blur",function(){
//     this.value = " "
// })

// input.addEventListener("focus",function(){
//     alert("SALAM")
// })
// input.addEventListener("input",function(){
//     let p =input.parentNode.nextElementSibling
//     p.innerHTML = input.value
// })

// input.addEventListener("change",function(){
//     console.log("salam");
// })



let div = document.getElementById("myDetails");
let ps = div.lastElementChild;

div.addEventListener("click", myFunction);
function myFunction() {
  ps.classList.toggle("d-none")
}