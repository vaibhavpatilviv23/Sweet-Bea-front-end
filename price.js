var samosa = 0;
var price = 0;


function lessPrice() {
    samosa = samosa - 1;
    price = price - 18;
}

function addPrice() {
    samosa = samosa + 1;
    price = price + 18;
}



document.getElementById("unitsview").innerHTML = samosa;
document.getElementById("priceview").innerHTML = price;

