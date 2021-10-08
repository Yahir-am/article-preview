const btn = document.querySelector(".share");
const social = document.querySelector(".share-media");

btn.addEventListener("click",active);

function active(){
    social.classList.toggle("active");
}

