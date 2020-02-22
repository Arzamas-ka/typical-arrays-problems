exports.min = function min(array) {
    if (!Array.isArray(array)) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }

    return Math.min(...array);
};

exports.max = function max(array) {
    if (!Array.isArray(array)) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }

    return Math.max(...array)
};

exports.avg = function avg(array) {
    if (!Array.isArray(array)) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }

    let sum = array.reduce((prev, next) => prev + next, 0)
    return sum / array.length;
};
