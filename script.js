const heartIcon = document.getElementsByClassName("heartIcon");
for (const Icon of heartIcon){
    let heartNumber = 0;
    Icon.addEventListener('click', function(){
        // console.log("Heart Clicked");
        const initialHeart = parseInt(document.getElementById('initial-heart').innerText);
        // console.log(initialHeart);
        heartNumber = 0 + 1;
        let finalHeartCount = initialHeart + heartNumber;
        console.log(finalHeartCount);
        document.getElementById("initial-heart").innerText = finalHeartCount;        
    })
}
