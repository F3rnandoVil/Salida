const but = document.querySelector('button.button-15');

but.addEventListener("mouseover", mouseHover)

function f1() {
    alert("Siiiiiuuuu");
// let num = prompt("Cual es tu numero de telefono")
// console.log(num)
}
function mouseHover() {
    const i = Math.floor(Math.random()*500)+1 ;
    const j = Math.floor(Math.random()*500)+1 ;
    but.style.left=i+"px";
    but.style.top=j+"px";
}