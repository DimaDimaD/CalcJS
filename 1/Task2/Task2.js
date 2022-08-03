let a = prompt('Введите первое число:');
let b = prompt('Введите второе число:');

function sumAndDif(a, b) {
    
    return !Number(a) ? 'Некорректный ввод' :
            !Number(b) || Number(b) == 0 ? 'Некорректный ввод' : 
                `Ответ: ${Number(a) + Number(b)}, ${Number(a) / Number(b)}`;
}

console.log(sumAndDif(a, b));