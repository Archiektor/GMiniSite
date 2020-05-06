console.log('WTF!');
const arrOfObj = [
    {name: 'Nikki', age: 28},
    {name: 'Alex', age: 22},
    {name: 'Bobo', age: 23},
    {name: 'Kate', age: 18}];
const arr2 = [342342, 3, 15, -20, 111, 7];
const input = document.querySelector('.searchBar__input');
const btn = document.querySelector('.btn-block__item');

// 6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры
const superSum = (args) => {
    const randomNum = Math.floor(Math.random() * args.length);
    const randomNum2 = Math.floor(Math.random() * args.length);

    return (parseInt(args[randomNum]) + parseInt(args[randomNum2]));
}

let phrase;
// 5.  При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве


input.addEventListener('input', (e) => {
    e.preventDefault();
    phrase = e.target.value;
});

// 3.  JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
// 4. Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”
// 5.
btn.addEventListener('click', () => {
    if (phrase === 'google') {
        alert("Yandex круче. Но это не точно");
    }
    //!!! here be better to pass some reqular expression
    let modifiedPhrase = superSum(phrase.split(' '));
    if (Number.isFinite(modifiedPhrase)) {
        phrase = modifiedPhrase;
    }
    alert(arrOfObj[0].name);
    alert(phrase);
    input.value = '';
})

// 7. Создать массив из чисел в перемешку (не отсортированы).
// С помощью цикла for найти максимальный и минимальный элементы в массиве
const findMinMax = (data) => {
    let minNum, maxNum;
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            minNum = data[i];
            maxNum = data[i];
        }
        minNum = data[i] < minNum ? data[i] : minNum;
        maxNum = data[i] > maxNum ? data[i] : maxNum;
    }

    return {
        minNum,
        maxNum
    };
}

console.log(findMinMax(arr2));

// 8. Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значениям напрямую

const reverse = () => {
    let a = 343;
    let b = 'dfsf';
    let c;
    c = a;
    a = b;
    b = c;

    console.log(a, b);
}

reverse();

//9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax
// (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)

const findMax = (data) => {
    let maxNumber;
    for (let i = 0; i < data.length; i++) {
        if (!maxNumber) {
            maxNumber = data[i];
        }
        maxNumber = data[i] > maxNumber ? data[i] : maxNumber;
    }

    return maxNumber;
}


const res = findMax([-25, 111, 334, 232, 7]);
console.log(res);
