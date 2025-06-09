"use strict";

// • Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5;
alert(x++); //5

// • Чему равно такое выражение: [ ] + false - null + true ?
[] + false - null + true; //NaN

// • Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let xx = (y = 2);
alert(xx); // 2

// • Чему равна сумма [ ] + 1 + 2?
[] + 1 + 2; //12

// • Что выведет этот код: alert( "1"[0] )?
alert("1"[0]); //1

// • Чему равно 2 && 1 && null && 0 && undefined ?
2 && 1 && null && 0 && undefined; //null

// • Есть ли разница между выражениями? !!( a && b ) и (a && b)?
!!(a && b); //boolean
a && b; // value

// • Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
alert(null || (2 && 3) || 4); // 3

// • a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
a = [1, 2, 3]; //no
b = [1, 2, 3];

// • Что выведет этот код: alert( +"Infinity" ); ?
alert(+"Infinity"); //infinity

// • Верно ли сравнение: "Ёжик" > "яблоко"?
"Ёжик" > "яблоко"; //no

// • Чему равно 0 || "" || 2 || undefined || true || falsе ?
0 || "" || 2 || undefined || true || falsе; //2
