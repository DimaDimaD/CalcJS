//принимаем входные данные: первое число, второе число, операция
let firstNum = '';
let secondNum = '';
let operation = '';
let finish = false; // показатель нажатой клавиши =


//значения для сравнения входных данных
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '/', 'X'];
const deleteButt = '\u{2192}';
const plusMinus = '+/-';


//подключаем экран калькулятора
const calcScreen = document.querySelector('.calc-screen p');


//функция all clear для удаления всех введенных данных
function ac() {
    firstNum = '';
    secondNum = '';
    operation = '';
    finish = false;
    calcScreen.textContent = 0;
}


// функция подсчёта знаков после запятой
function floatLength(number) {
    let numLength = 0;
    let num = number;

    if (num % 1 !== 0) {
        while (num % 1 !== 0) {
            num = num * 10;
            numLength++;
        }

        return numLength;
    }
}


//функция удаления последнего символа
function deleteSymbol(str) {
    if (str.length > 1) { return str.substring(0,str.length - 1); }
    else { return ''; }
}

// функция смены знака
function changeSign(number) {
    const copyNumber = (-1) * number;
    return copyNumber;
}


//взаимодействие через нажатие клавиш на экране
document.querySelector('.buttons').onclick = (event) => {

    // если нажали не на кнопку
    if ( !event.target.classList.contains('btn') ) { return; }
    // если нажали на С
    if ( event.target.classList.contains('c') ) {
        ac();
        return;
    }

    calcScreen.textContent = '';

    //читаем нажатую кнопку
    const pushButt = event.target.textContent;

    //нажато значение из digit
    if (digit.includes(pushButt)) {

        //пишем первое число
        if (secondNum === '' && operation === '') {
            firstNum = firstNum + pushButt;
            console.log(firstNum, secondNum, operation);
            calcScreen.textContent = firstNum;
        }

        //Введено выражение (оба числа, знак операции) и нажато =
        else if (firstNum !== '' && secondNum !== '' && finish) {
                secondNum = pushButt;
                finish = false;
                calcScreen.textContent = secondNum;
        }
        //остальные случаи - пишем второе число
        else {
            secondNum = secondNum + pushButt;
            calcScreen.textContent = secondNum;
        }
        console.log(firstNum, secondNum, operation);
        return;
    }

    // нажато значение из action
    if (action.includes(pushButt)) {
        operation = pushButt;
        calcScreen.textContent = operation;
        console.log(firstNum, secondNum, operation);
        return;
    }

    // нажата кнопка "удалить символ"
    if (deleteButt.includes(pushButt)) {

        //пишется первое число
        if (secondNum === '' && operation === '') {
            firstNum = deleteSymbol(firstNum);
            calcScreen.textContent = firstNum;
            console.log(firstNum, secondNum, operation);
        }


        //пишется второе число
        else if (firstNum !== '' && operation !== '') {
            secondNum = deleteSymbol(secondNum);
            calcScreen.textContent = secondNum;
            console.log(firstNum, secondNum, operation);
        }



        console.log(firstNum, secondNum, operation);
    }

    // нажата кнопка +/-
    if (plusMinus.includes(pushButt)) {

        //вводится первое число
        if (secondNum === '' && operation === '') {
            firstNum = changeSign(firstNum);
            console.log(firstNum, secondNum, operation);
            calcScreen.textContent = firstNum;
        }

        //после вычисления выражения (был нажат знак =)
        else if (finish === true) {
            firstNum = changeSign(firstNum);
            calcScreen.textContent = firstNum;
            console.log(firstNum, secondNum, operation);
        }

        // введено первое число и знак, второе не вводилось
        else if (firstNum !== '' && operation !== '' && secondNum === '') {
            calcScreen.textContent = operation;
            console.log(firstNum, secondNum, operation);
        }

        //вводится второе число
        else if (firstNum !== '' && secondNum !== '') {
            secondNum = changeSign(secondNum);
            calcScreen.textContent = secondNum;
            console.log(firstNum, secondNum, operation);
        }
    }

    // нажата кнопка =
    if (pushButt === '=') {
        if (secondNum === '') { secondNum = firstNum; }
        switch (operation) {
            case '+':
                firstNum = Number(firstNum) + Number(secondNum);
                break;
            case '-':
                firstNum = firstNum - secondNum;
                break;
            case 'X':
                firstNum = firstNum * secondNum;
                break;
            case '/':
                if (secondNum === '0') {
                    ac();
                    calcScreen.textContent = 'Ошибка';
                    return;
                }

                firstNum = firstNum / secondNum;
                break;
        }
        finish = true;

        //обработка случаев большого количества символов после точки
        if ( floatLength(Number(firstNum) ) > 7 ) {
            calcScreen.textContent = firstNum.toFixed(8);
        }
        else { calcScreen.textContent = firstNum; }

        console.log(firstNum, secondNum, operation);
    }


};