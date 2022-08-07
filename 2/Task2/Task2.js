function selectFromInterval(arrOfNum, firstNum, secondNum) {

    if (!checkArrNum(arrOfNum)) {
        throw new Error('Некорректно введен массив чисел.');
    }
    else if (!Number(firstNum) || !Number(secondNum)) {
        throw new Error('Некорректно введены границы интервала.');
    }

    else if (firstNum <= secondNum) {

        let selectedArr = [];

        for (let num of arrOfNum) {
            if (num >= firstNum && num <= secondNum) {
                selectedArr.push(num);
            }
        }

        return selectedArr;
    }

    else {
        let selectedArr = [];

        for (let num of arrOfNum) {
            if (num >= secondNum && num <= firstNum) {
                selectedArr.push(num);
            }
        }

        return selectedArr;
    }
}

function checkArrNum(arr) {

    for (let element of arr) {
        if ( !Number(element) ) {
            return false;
        }
    }

    return  true;
}

