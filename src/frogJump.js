/**
 * A small frog wants to get to the other side of the road.
 * The frog is currently located at position X and wants to
 * get to a position greater than or equal to Y.
 * The small frog always jumps a fixed distance, D.
 * @param {Number} X Start position
 * @param {Number} Y End position
 * @param {Number} D Jump size
 * @returns {Number} Number of jumps to get form X to Y.
 */
function solution(X, Y, D) {
    // The Math.abs() function returns the absolute value of a number.
    var dist = Math.abs(X - Y);

    // The Math.ceil() function returns the smallest integer greater than or equal to a given number.
    return Math.ceil(dist / D);
}
