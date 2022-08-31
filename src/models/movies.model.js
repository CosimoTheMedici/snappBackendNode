var fs = require('fs');
var Movies = function (movie) {
    this.name          =   movie.name;
    this.category      =   movie.category;
    this.topMovie      =   movie.topMovie;
    this.image         =   movie.image;
    this.actors        =   movie.actors;
    this.description   =   movie.description;
    
}

Movies.getTopSixMovies = (result) =>{
    fs.readFile(__dirname+"/"+"movieData.json",'utf8',function(err,res) {
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);

        }else{
            console.log("Employees fetched data",res);
            result(null,res);
        }
    })

}
module.exports = Movies;
// "Jamaica","Japan","Jersey","Jordan","Kenya","Kiribati","Korea","Kuwait","Latvia","Lebanon","Lesotho","Lithuania","Luxembourg","Macao","Ethiopia","Falkland","Fiji","Finland","French","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guatemala","Guernsey","Guinea",
// "Bissau","Haiti","Honduras","Hungary","Iceland","India","Indonesia"