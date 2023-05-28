//08-8
var week = 1;
var weekName;

switch (week) {
    case 1:
        weekName = 'Monday';
        break;
    case 2:
        weekName = 'Tuesday';
        break;
    case 3:
        weekName = 'Wednesday';
        break;
    case 4:
        weekName = 'Thursday';
        break;
    case 5:
        weekName = 'Friday';
        break;
    case 6:
        weekName = 'Saturday';
        break;
    case 7:
        weekName = 'Sunday';
        break;
    default:
        weekName = 'Invalid week';
}

console.log(weekName);