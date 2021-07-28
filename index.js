

// write a superBowlWin function that recieved an array of javscript objects as an argument
// each object has 2 properties, year and result
// use find() to test if result of each object is "W"
// if it is, return the year of the win
// if it is not, return "No winners"
// if there are no winners, return "No winners"

function superbowlWin(arr) {
    var winner = arr.find(function(obj) {
        return obj.result === "W";
    });
    if (winner) {
        return winner.year;
    } else {
        return undefined;
    }
}