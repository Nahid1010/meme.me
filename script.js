fetch ("api.giphy.com/v1/gifs/search?api_key=ep8j72PvIfJJLKq5p8x7pvmvoxyqMcby&q=dog")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    console.log(data)    
    }
    )

