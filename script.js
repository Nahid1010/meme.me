var happy = 

function searchImg {
    fetch ("http://api.giphy.com/v1/gifs/search?api_key=ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby&q=#&limit=5")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
        console.log(data.data)    
         }
        )
        };

document.getElementById("Happy").addEventListener("click", function() {
    function searchImg
    
});


