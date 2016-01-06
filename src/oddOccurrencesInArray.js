/**
 * A non-empty zero-indexed array consisting of N integers is given.
 * The array contains an odd number of elements, and each element of
 * the array can be paired with another element that has the same value,
 * except for one element that is left unpaired.
 * @param {Array} array
 * @returns {Number}
 */
function oddOccurrencesInArray(array) {
    var result = array[0];

    // use XOR operator to detect unpaired.
    // E.g.: [8, 15, 15]
    //  1000 XOR 1111 -> 0111
    //  0111 XOR 1111 -> 1000
    // each repeated value found, the XOR will "revert" the value
    // so, we are adding values, and reverting until we get a unpaired value.
    for (var i = 1, l = array.length;
         i < l;
         result ^= array[i++]);

    return result;
}
