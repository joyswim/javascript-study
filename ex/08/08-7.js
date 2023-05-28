//08-7
var week = 1;
var weekName;

switch (week) {
    case 1:
        weekName = 'Monday';
    case 2:
        weekName = 'Tuesday';
    case 3:
        weekName = 'Wednesday';
    case 4:
        weekName = 'Thursday';
    case 5:
        weekName = 'Friday';
    case 6:
        weekName = 'Saturday';
    case 7:
        weekName = 'Sunday';
    default:
        weekName = 'Invalid week';
}

console.log(weekName);