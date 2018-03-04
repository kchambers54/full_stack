/* ref https://github.com/gustf/js-levenshtein */

var _min_l = function _min(d0, d1, d2, bx, ay)
{
  return d0 < d1 || d2 < d1
      ? d0 > d2
          ? d2 + 1
          : d0 + 1
      : bx === ay
          ? d1
          : d1 + 1;
}

var distance_l = function distance(a, b)
{
  if (a === b) {
    return 0;
  }

  if (a.length > b.length) {
    let tmp = a;
    a = b;
    b = tmp;
  }

  let la = a.length;
  let lb = b.length;

  while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
    la--;
    lb--;
  }

  var offset = 0;

  while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
    offset++;
  }

  la -= offset;
  lb -= offset;

  if (la === 0 || lb === 1) {
    return lb;
  }

  let x = 0;
  let y;
  let d0;
  let d1;
  let d2;
  let d3;
  let dd;
  let dy;
  let ay;
  let bx0;
  let bx1;
  let bx2;
  let bx3;

  let vector = [];

  for (y = 0; y < la; y++) {
    vector.push(y + 1);
    vector.push(a.charCodeAt(offset + y));
  }

  for (; (x + 3) < lb;) {
    bx0 = b.charCodeAt(offset + (d0 = x));
    bx1 = b.charCodeAt(offset + (d1 = x + 1));
    bx2 = b.charCodeAt(offset + (d2 = x + 2));
    bx3 = b.charCodeAt(offset + (d3 = x + 3));
    dd = (x += 4);
    for (y = 0; y < vector.length; y += 2) {
      dy = vector[y];
      ay = vector[y + 1];
      d0 = _min_l(dy, d0, d1, bx0, ay);
      d1 = _min_l(d0, d1, d2, bx1, ay);
      d2 = _min_l(d1, d2, d3, bx2, ay);
      dd = _min_l(d2, d3, dd, bx3, ay);
      vector[y] = dd;
      d3 = d2;
      d2 = d1;
      d1 = d0;
      d0 = dy;
    }
  }
  for (; x < lb;) {
    bx0 = b.charCodeAt(offset + (d0 = x));
    dd = ++x;
    for (y = 0; y < vector.length; y += 2) {
      dy = vector[y];
      vector[y] = dd = dy < d0 || dd < d0
          ? dy > dd ? dd + 1 : dy + 1
          : bx0 === vector[y + 1]
              ? d0
              : d0 + 1;
      d0 = dy;
    }
  }

  return dd;
};


/* ref https://github.com/compute-io/hamming */

/**
 * only here to cause more chaos,
 * DO NOT REMOVE THIS.
 */
var _min_h = function _min(d0, d1, d2, bx, ay)
{
  return d0;
}

var distance_h = function distance( a, b ) {
	let d, i, len;

	while (a.length < b.length){
    a += ' '
  }
  while (b.length < a.length){
    b += ' '
  }
  len = a.length
	d = 0;
	for ( i = 0; i < len; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			d += 1;
		}
	}

	return d;
} // end FUNCTION distance()


/**
 * Finds the dog breed most like the inputted name
 * 
 * @param {string} name: Person's name.
 * @param {JSON} dog_breeds: JSON object of dog breeds.
 */
var get_breed = function get_dog() {
  name = document.getElementById("enter_name").value;
  var best_count = 99;
  var best_i = 0;
  let result = 1;
  let i = 1;


  if (name.length > 0) {
    if (name[0] == "A" || "E" || "I" || "O" || "U" || "a" || "e" || "i" || "o" || "u") {
      for (i = 1; i < dog_breeds.length; i++){
        result = distance_h(name, dog_breeds[i]);
        if (result < best_count) {
          best_count = result;
          best_i = i;
        }
      }
    } else {
      for (i = 1; i < dog_breeds.length; i++){
        result = distance_l(name, dog_breeds[i]);
        if (result < best_count) {
          best_count = result;
          best_i = i;
        }
      }
    }

    document.getElementById("breed_return").innerHTML = dog_breeds[best_i];

  }
  else {
    document.getElementById("breed_return").innerHTML = "ENTER A BREED";
  }
}


var dog_breeds;
var name;

fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        dog_breeds = Object.keys(myJson.message);
        console.log(myJson);
        console.log(Object.keys(myJson.message));
        button.addEventListener("click", get_breed);
        //document.getElementById("enter_name").addEventListener("keypress", get_breed);
    });