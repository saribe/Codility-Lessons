/**
 * Calculate the values of counters after applying all alternating operations:
 *   increase counter by 1; set value of all counters to current maximum.
 * @param {Number} n
 * @param {Array} array
 * @returns {Array}
 */
function solution(n, array) {
    var change;
    var counters = [/*n items*/];
    var iN = 0;
    var iM;
    var l = array.length;
    var max = 0;
    var value;

    // Initialize counters
    for (; iN < n; counters[iN++] = 0);

    // Count
    for (iN = 0; iN < l; iN++) {
        value = array[iN];               // for easy reading only

        if (value > n) {
            if (change) {               // skip repeated max set
                for (iM = 0; iM < n; counters[iM++] = max);
                change = false;         // flag no changes!
            }
        } else {
            change = ++counters[value - 1];
            if (max < change) {
                max = change;
            }
        }
    }

    return counters;
}
