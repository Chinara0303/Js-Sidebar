let sidebar = document.getElementById("sidebar");
let icons = document.querySelector(".open-close-icons")
let openIcon = icons.children[0];
let closeIcon = icons.children[1]

openIcon.addEventListener("click",function(){
    sidebar.classList.remove("hide-sidebar");
    this.classList.add("d-none");
    closeIcon.classList.remove("d-none")
})

closeIcon.addEventListener("click",function(){
    sidebar.classList.add("hide-sidebar");
    this.classList.add("d-none");
    openIcon.classList.remove("d-none")
})


