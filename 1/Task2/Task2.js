function sumAndDif() {

    const num1 = +prompt('Введите первое число:');
    const num2 = +prompt('Введите второе число:');

    if (!num1) {
        return 'Некорректный ввод';
    }
    
    else if (!num2 || num2 == 0) {
        return 'Некорректный ввод';
    }

    else {
        return `Ответ: ${num1 + num2}, ${num1 / num2}`;
    }
}

console.log(sumAndDif());

