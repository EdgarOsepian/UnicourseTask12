let age = parseInt(prompt("Enter your age"));
let movieType = prompt("Enter movie type (regular or 3D)");
let time = prompt("Enter time of day (matinee or evening)").toLowerCase();
let coupon = 0;

let ticket = 0;

function getPrice() {
    let total = 0;
    if (age < 10) {
        total += 5;
    } else if (age >= 10 && age < 65) {
        total += 15;
    } else if (age >= 65) {
        total += 10;
    } else {
        total += 0;
    }

    if (movieType == "3D" || movieType == "3d") {
        total += 5;
    } else {
        total += 0;
    }

    if (time == "evening") {
        total += 5;
    } else {
        total += 0;
    }

    if (coupon) {
        total -= 5;
    }

    ticket += total;
    console.log(`ბილეთის ფასი თქვენთვის არის : ${ticket} ლარი`);
}

getPrice();