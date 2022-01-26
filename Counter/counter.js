var increase_btn = document.getElementById("increase");
var decrease_btn = document.getElementById("decrease");
var reset_btn = document.getElementById("reset");

count = 0

console.log('Script loaded...')

function changeColor(){
    if (count > 0){
        document.getElementById("count").style.color = "green";
    } if (count < 0 ) {
        document.getElementById("count").style.color = "red";
    } else {
        document.getElementById("count").style.color = "lightcoral";
    }
}


increase_btn.addEventListener("click", function increase(){
    document.getElementById("count").textContent = count += 1;
    changeColor()
})

decrease_btn.addEventListener("click", function decrease(){
    document.getElementById("count").textContent = count -= 1
    changeColor()
})

reset_btn.addEventListener("click", function reset(){
    document.getElementById("count").textContent = count = 0;
    changeColor()
})

