

const callButton = document.getElementsByClassName('call-button');
let coinCount = parseInt(document.getElementById('coin-count').innerText);
console.log(coinCount);


const callCharge = 20;
for (let button of callButton) {
    button.addEventListener("click", function () {
        const serviceTitle = button.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const serviceNumber = button.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
        if (coinCount >= callCharge) {
            coinCount = coinCount - callCharge;
            document.getElementById("coin-count").innerText = coinCount;
            alert('Calling ' + serviceTitle +" "+ serviceNumber + "...");
        } else {
            alert("Not enough coins to make a call! Please Recharge !!!!");
        }
    })
}