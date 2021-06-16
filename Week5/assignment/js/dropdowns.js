import getDinners from 
"./dinners.js"
console.log(getDinners)

import getMovieList from
 "./movies.js";
 console.log(getMovieList)

 var movies = getMovieList();
 
 var dinners = getDinners();

function populateDD(ary, obj) {
    for (let x = 0; x < ary.length; x++) {
        obj.options[x] = new Option(ary[x], x);
    }
}

var selectMovies = document.getElementById('movies');
 populateDD(movies, selectMovies)

var selectDinners = document.getElementById('dinners');
populateDD(dinners, selectDinners)

document.getElementById('generate')
.addEventListener(
    'click', function() {
    
    document.getElementById('suggestion').style.visibility = 'visible';
    });