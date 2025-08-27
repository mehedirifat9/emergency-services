const copyBtn = document.getElementsByClassName('copy-btn');

let copyNumber = parseInt(document.getElementById('copy-number').innerText);
console.log(copyNumber);

for (let copy of copyBtn){
    copy.addEventListener("click", function(){
        const helpLineNumber = copy.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
        navigator.clipboard.writeText(helpLineNumber)
        copyNumber = copyNumber + 1;
        document.getElementById("copy-number").innerText = copyNumber;
        console.log(copyNumber);
        alert("Number Copied Successfully" + " " + helpLineNumber)
    })
}