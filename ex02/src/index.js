const workDays = ['MON', 'TUE', 'WED', 'FRI'];

function myWeek(days) {
    let week = [...days, "SAT", "SUN"]

    return week


}

console.log(myWeek(workDays));
module.exports = myWeek;