let APIKEY = "ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby";
var displayEl = document.getElementById("display")

function searchImg (emotion) {
    fetch ("http://api.giphy.com/v1/gifs/random?api_key=ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby&tag=" + emotion )
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log("data",data.data.images.original.url)
            renderToScreen (data.data.images.original.url)
        // console.log(data.data[0].images.original.url)    
         }
        )
        };

function init() {
    document.getElementById("Emojis").addEventListener("click", handleClick)
}
function handleClick (ev) {
    var mood = ev.target.dataset.mood;
    if (mood) {
        searchImg(mood)
    }
}

function renderToScreen (memeData) {
    // create img
    var imgEl = document.createElement ("img");
    // append/set url
    imgEl.src = memeData;
    imgEl.alt = "gif"; //to do ?add meme ?
    // append imgEl to display
    displayEl.insertAdjacentElement("afterbegin",imgEl)
} 

document.addEventListener("DOMContentLoaded", init);
// let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;