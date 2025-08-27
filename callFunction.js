

const callButton = document.getElementsByClassName('call-button');

const historySection = document.getElementById('history-section');
let coinCount = parseInt(document.getElementById('coin-count').innerText);
console.log(coinCount);


const callCharge = 20;
for (let button of callButton) {
    button.addEventListener("click", function () {
        // Traversing 
        const serviceTitle = button.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const serviceNumber = button.parentNode.parentNode.childNodes[3].childNodes[5].innerText;

        if (coinCount >= callCharge) {
            coinCount = coinCount - callCharge;
            document.getElementById("coin-count").innerText = coinCount;
            alert('Calling ' + serviceTitle + " " + serviceNumber + "...");
        } else {
            alert("Not enough coins to make a call! Please Recharge !!!!");
            return;
        }

        // Create New Section 
        const newHistorySection = document.createElement("section");
        historySection.appendChild(newHistorySection);
        newHistorySection.classList.add('call-list');
        const d = new Date().toLocaleTimeString([],{
            hour12: true
        });

        newHistorySection.innerHTML = `
        <div><h1 style:{font-size:24px}>${serviceTitle} </h1>
        <p>${serviceNumber}</p></div>
        <p>${d}</p>
        `
        const clearBtn = document.getElementById('clear-btn');
        clearBtn.addEventListener('click', function () {
            newHistorySection.remove();
        });

        
        
    })
}