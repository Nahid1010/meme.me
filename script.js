let APIKEY = "ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby";
var displayEl = document.getElementById("display")

function searchImg (emotion) {
    fetch ("http://api.giphy.com/v1/gifs/search?api_key=ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby&q=" + emotion + "&limit=1")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            renderToScreen (data.data[0])
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
    imgEl.src = memeData.images.original.url;
    imgEl.alt = "gif"; //to do ?add meme ?
    // append imgEl to display
    displayEl.append (imgEl);
} 

document.addEventListener("DOMContentLoaded", init);
// let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;