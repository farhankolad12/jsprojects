function calculate(){
var billamount = document.getElementById("bill").value;
var service = document.getElementById("service").value;
var people = document.getElementById("personper").value;

if (billamount === "" || service == 0){
    alert("Please Enter values");
    return;
}

if (people === "" ||  people <= 1){
    people = 1;
    document.getElementById("each").style.display = "none";
} else {
    document.getElementById("each").style.display = "block";
}

    var total = (billamount * service) / people
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    var choose_cur = document.getElementById("currency").value
    if (choose_cur == 1){
        var inr = document.getElementById('curren');
        inr.textContent = "₹"
    } else {
        var usd = document.getElementById('curren');
        usd.textContent = "$"
    }
}

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = 
function(){
    calculate();
};