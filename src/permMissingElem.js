/**
 * A zero-indexed array A consisting of N different integers is given.
 * The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 * Your goal is to find that missing element.
 * @param {Array} array
 * @returns {Number}
 */
function permMissingElem(array) {
    var n = array.length + 1;               // number of consecutive numbers
    var expected = (n * (n + 1)) / 2;       // get sum of consecutive numbers

    array.forEach(v => expected -= v);      // subtract all existing numbers

    return expected;                        // the missing number
}
