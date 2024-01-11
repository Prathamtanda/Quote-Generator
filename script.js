//naming
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loading = document.getElementById('loader');

//loader shown
function loadiing() {
    loading.hidden = false;
    quoteContainer.hidden = true;
    
}

//loader if else or remove
function complete() {
    if (!loading.hidden) {
        quoteContainer.hidden = false;
        loading.hidden = true;
        
    }
    
}

// Get Quotes Api

async function getQuotes() {
    loadiing();
    const apiUrl ="https://api.quotable.io/random";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.author === '') {
            authorText.innerText = "Unknown"
            
        }else {
            authorText.innerText = data.author;
        }
        authorText.innerText = data.author;
        quoteText.innerText = data.content;

        complete();
    } catch (error) {
        getQuotes();
        
    }
}

//twitter connection to the button
function tweetQuote() {

    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

//this is how we add click to html button
newQuoteBtn.addEventListener('click',getQuotes);
twitterBtn.addEventListener('click', tweetQuote);

//this is what we want in output
getQuotes();    