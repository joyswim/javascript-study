//08-9 윤년(366일)인지 판별해서 2월의 일수를 계산하는 예제
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 판별
        // 1. 4로 나누어 떨어지는 해는 윤년
        // 2. 4로 나누어 떨어지더라도 100으로 나누어 떨어지면 평년(예외)
        // 3. 400으로 나누어지는 해는 윤년
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}

console.log(days);