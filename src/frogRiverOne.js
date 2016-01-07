function frogRiverOne(position, array) {
    var route = {};
    var steps = position;
    var value;

    for (var i = 0; i < array.length; i++) {
        value = array[i];

        if (!route[value] && value <= position) {
            route[value] = true;

            if (!--steps) return i;
        }
    }

    return -1;
}
