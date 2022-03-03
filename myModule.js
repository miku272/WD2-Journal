// WRITE NODE.JS CODE TO CREATE A MODULE CALLED mymodule WHICH CONTAIN (square() and cube()).

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

module.exports.square = square;
module.exports.cube = cube;