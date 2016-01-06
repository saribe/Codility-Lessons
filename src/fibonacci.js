/**
 * The Fibonacci Sequence is the series of numbers:
 *      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * @param {Number} number
 * @returns {Number}
 */
function fibonacci(number) {
    // place your cache memorization according to your needs
    // this solution will flush cache after return
    var cache = {};

    // optional seed cache
    cache[2] = 1;
    cache[3] = 2;
    cache[4] = 3;
    cache[5] = 5;
    cache[6] = 8;
    // ...

    return _execute(number);
    /////////// Implementation ///////////

    function _execute(n) {
        // special cases 0 or 1
        if (n < 2) return n;

        var keyA = n - 1;
        var keyB = n - 2;

        if (!cache[keyA]) cache[keyA] = _execute(keyA);
        if (!cache[keyB]) cache[keyB] = _execute(keyB);

        return cache[keyA] + cache[keyB];
    }
}
