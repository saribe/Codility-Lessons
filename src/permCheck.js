function permCheck(array) {
    var i = 0;
    var l = array.length;
    var bit = [];

    for (; i < l; bit[array[i++]] = true);
    for (i = 1; i <= l; i++) {
        if (!bit[i]) return 0;
    }

    return 1;
}
