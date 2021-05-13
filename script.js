function searchImg () {
    fetch ("http://api.giphy.com/v1/gifs/search?api_key=ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby&q=#&limit=5")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
        console.log(data.data)    
         }
        )
        };


let APIKEY = "ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby";

document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("Emojis").addEventListener("click", ev => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;

})

 
