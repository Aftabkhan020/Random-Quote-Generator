const quoteText = document.querySelector(".quote");  //author
const author = document.querySelector(".author-name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");
function randomQuote(){
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.innerText = "New Quote";
    });

}

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
    //Navigator.clipboard.writeText(quoteText.innerText);
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click",()=>{
    
    let twitterurl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(twitterurl, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);