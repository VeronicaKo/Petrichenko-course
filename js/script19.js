"use strict"

if (null) {
    console.log('ok');
} else {
    console.log('err');
}

const num = 50;

if (num < 49) {
    console.log('Too little');
} else if (num >100) {
    console.log('Too much');
} else {
    console.log('Enough');
}

(num == 50) ? console.log('ok') : console.log('err');


const key =  100
switch (key) {
    case 46:
        console.log('...........');
        break;
    case 70:
        console.log('.....................');
        break;
    case 100:
        console.log('.........................................');
    default:
        console.log('...');
        break;
}