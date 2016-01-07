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
    var maxGap = -1;

    while (number > 0) {
        lastBit = number & 1;                   // get less significant bit
        number = number >> 1;                   // remove less significant bit
        current = lastBit ? 0 : current + 1;    // update current count

        if (lastBit && maxGap >= 0 && maxGap < current)
            maxGap = current;
    }

    // check if is any gap, if not return 0 instead -1
    return maxGap < 0 ? 0 : maxGap;
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
    var maxGap = -1;

    for (var i = binaryString.length - 1; i >= 0; i--) {
        if (binaryString[i] === '1') {
            if (maxGap >= 0 && maxGap < current)
                maxGap = current;
            current = 0;
        } else {
            current++;
        }
    }

    return maxGap < 0 ? 0 : maxGap;
}
