function numToBase() {

    const num = +prompt('Введите число:');;
    const base = +prompt('Введите систему исчисления:');

    return num && base > 1 && base < 37 ?
           num.toString(base) : 'Некорректный ввод';
}

console.log(numToBase());
