const MovieModel = require('../models/movies.model')

exports.getTopMovies = (req, res)=>{
    MovieModel.getTopSixMovies((err,movies) =>{
        if(err)
            res.send(err)
            let movielists = JSON.parse(movies)
            var foundValue = movielists.filter(obj=>obj.topMovie===true).slice(0, 6);
            //console.log("Employee",typeof movielists );
            res.send(foundValue)       
    })
}
exports.getMovieByName = (req, res)=>{
    MovieModel.getTopSixMovies((err,movies) =>{
        if(err)
            res.send(err)
            const name = req.params.name
            let movielists = JSON.parse(movies)
            //var foundValue = movielists.filter(obj=>obj.name===name).slice(0, 6);
            var foundValue = movielists.filter(obj => obj.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
            //console.log("Employee",typeof movielists );
            res.send(foundValue)       
    })
}

exports.getAll = (req, res)=>{
    console.log("req",req.params);
    MovieModel.getTopSixMovies((err,movies) =>{
        if(err)
            res.send(err)
         
            let movielists = JSON.parse(movies)
           const page = req.params.page
           const limit = req.params.limit
           console.log(page,limit)

           const startIndex = (page - 1) * limit
           const endIndex = page * limit
           const movie = movielists.slice(startIndex,endIndex)
            //console.log(movie)
            
            
            res.send(movie)    
         
    })
}
exports.getMovieByName1 = (req, res)=>{
    res.send({"lk":"kl"})
}