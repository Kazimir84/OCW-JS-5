// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numMin1 = (a, b, c) => {
    let min = 0;
    if (a < b && a < c) {
        min = a;
    } else if (b < a && b < c) {
        min = b;
    } else if (c < a && c < b) {
        min = c;
    };
    return min;
};
console.log('Min Number in Arrow Function = ', numMin1(22, 13, 15));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max;
let numMax1 = (a, b, c) => {
    let max = 0;
    if (a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else if (c > a && c > b) {
        max = c;
    };
    return max;
}
console.log('Max Number in Arrow Function = ', numMax1( 55, 8, 22));

// - створити функцію яка повертає найбільше число з масиву
let arr = [5, 18, 9, 4, 6];
let maxNumArr = (arr) => {
    let max = arr[0];
    for (let arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        };
    };
    return max;
};
console.log('Max Number in Arrow Function from Array = ', maxNumArr(arr));

// - створити функцію яка повертає найменьше число з масиву
let minNumArr = (arr) => {
    let min = arr[0];
    for (let arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        };
    };
    return min;
};
console.log('Min Number in Arrow Function from Array = ', minNumArr(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumNumArr = (arr) => {
    let sum = 0;
    for (let arrElement of arr) {
        sum +=arrElement;
    };
    return sum;
};
console.log('Sum Number in Arrow Function from Array = ', sumNumArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let midlSumArr = (arr) => {
    let midl = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        midl += arrElement/arr.length;
    }
    return midl;
};
console.log('Midl Sum Number in Arrow Function from Array = ', midlSumArr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
let anyNum = (...args) => {
    let max = args[0];
    let min = args[0];
    for (let arg of args) {
        if (arg > max) {
            max = arg;
        }
        if (arg < min) {
            min = arg;
            return min;
        }
    }
    return max;
}
console.log('From any Number Enter, Return min and display max', anyNum(1,2,3,5,44));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arrRandom = [];

let pushRandomNum = () => {
    for (let i = 0; i < 100; i++) {
        let argument = (Math.round(Math.random()*100));
        arrRandom.push(argument);
    }
}
pushRandomNum();
console.log('Random Number from 1 to 100', arrRandom);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let arrRandom2 = [];

let pushRandomNum2 = (limit) => {
    for (let i = 0; i < limit; i++) {
        let argument = (Math.round(Math.random()*100));
        arrRandom2.push(argument);
    }
}
pushRandomNum2(50);
console.log('Random Number from 1 to limit', arrRandom2);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrRevers = [1,2,3];
console.log('Not Reversed array -', arrRevers);

let getRevers = (...arg) => {
    arrRevers = [];
    for (let i = 0; i < arg.length; i++) {
        let argument = arg[i];
        for (let j = argument.length-1; j >=0 ; j--) {
            let argumentElement = argument[j];
            arrRevers.push(argumentElement);
        };
    };
};
getRevers(arrRevers);
console.log('Reversed array - ', arrRevers);