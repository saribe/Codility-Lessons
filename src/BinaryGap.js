/**
 * A binary gap within a positive integer N is any maximal
 * sequence of consecutive zeros that is surrounded by ones
 * at both ends in the binary representation of N.
 * @param {Number} number
 * @returns {Number}
 */
function binaryGap(number) {
    var current = 0;
    var lastBit;
    var maxGap = 0;

    while (number > 0) {
        lastBit = number & 1;       // get lees significant bit
        number = number >> 1;       // remove less significant bit

        if (lastBit) {
            if (maxGap < current) maxGap = current;
            current = 0;
        } else {
            current++;
        }
    }

    return maxGap;
}

/**
 * A binary gap within a positive integer N is any maximal
 * sequence of consecutive zeros that is surrounded by ones
 * at both ends in the binary representation of N.
 * @param {Number} number
 * @returns {Number}
 */
function binaryGapAlternative(number) {
    // we are cheating a little bit by working with strings,
    // however, with this situation we have
    // worst-case time complexity is O(32)
    var binaryString = number.toString(2);
    var current = 0;
    var maxGap = 0;

    for (var i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            if (maxGap < current) maxGap = current;
            current = 0;
        } else {
            current++;
        }
    }

    return maxGap;
}
