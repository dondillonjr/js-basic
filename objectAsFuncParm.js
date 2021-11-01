/* Pass Object as a function parameter */
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -8.75,
    average: 35.85
};
const half = (function() {
    //return function half(stats)
    //just pass in what you need - see below
    return function half({max, min})
    {
        return (stats.max + stats.min) / 2.0;
    };
})();
console.log(stats);
console.log("HALF STATS=" + half(stats));