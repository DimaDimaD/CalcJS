let a = prompt('Введите число:');
let b = prompt('Введите систему исчисления:');

function numToBase(a, b) {

    let num = Number(a);
    let base = Number(b);

    return num && base && base > 1 && base < 37 ?
           num.toString(base) : 'Некорректный ввод';
}
