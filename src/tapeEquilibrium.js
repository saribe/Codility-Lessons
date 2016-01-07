/**
 * Absolute difference between the sum of the
 * first part and the sum of the second part.
 * @param {Array} array
 * @returns {Number}
 */
function tapeEquilibrium(array) {
    var i = 0;
    var l = array.length;
    var lSum = 0;
    var min = ~(1 << 31);
    var rSum, diff;
    var total = 0;

    for (; i < l; total += array[i++]);
    for (i = 0; i < l - 1; i++) {
        lSum += array[i];
        rSum = total - lSum;
        diff = Math.abs(lSum - rSum);
        if (diff < min) min = diff;
    }

    return min;
}
