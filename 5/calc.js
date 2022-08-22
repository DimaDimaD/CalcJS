//данные на вход
let firstNum = '';
let secondNum = '';
let operation = '';
let finish = false;

//значения для сравнения входных данных
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '/', 'X'];
const deleteButt = '\u{2192}';
const plusMinus = '+/-';

const calcScreen = document.querySelector('.calc-screen p');

//функция all clear
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

//функция удаления последнего символа, еще не добавлена
function deleteSymbol() {
    if (firstNum !== '' && operation !== '' && secondNum.length > 0) {
        secondNum = secondNum.substring(0, secondNum.length - 1);
    }
    else if (secondNum === '' && operation === '' && firstNum.length > 0) {
        firstNum = firstNum.substring(0, firstNum.length - 1);
    }
}

// функция смены знака, еще не добавлена
function changeSign(number) {
    const copyNumber = (-1) * number;
    return copyNumber;
}



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

    //нажата кнопка "удалить символ" еще в разработке
    // if (deleteButt.includes(pushButt)) {
    //     deleteSymbol();
    //     console.log(firstNum, secondNum, operation);
    // }

    //нажата кнопка +/-
    // if (plusMinus.includes(pushButt)) {
    //     if
    // }

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