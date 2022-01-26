var btns = document.getElementById("btn");
rcolors = ["Red", "Violet", "Indigo", "White", "Green", "Yellow"]


btns.addEventListener("click",function changecolor() {
    a = rcolors.length;
    b = Math.floor(Math.random() * a);
    document.body.style.backgroundColor = rcolors[b];
    document.getElementById("color").textContent = rcolors[b];
})