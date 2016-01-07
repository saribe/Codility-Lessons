/**
 * Find the minimal positive integer not occurring in a given sequence.
 * @param {Array} non-empty zero-indexed array of integers
 * @returns {Number} minimal positive integer (greater than 0) that does not occur in array
 */
function missingInteger(array) {
    var orderArrayWithoutRepeated = [];
    var i;

    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            orderArrayWithoutRepeated[array[i]] = array[i];
        }
    }

    for (i = 1; i <= orderArrayWithoutRepeated.length; i++) {
        if (!orderArrayWithoutRepeated[i]) return i;
    }

    return 1;
}
