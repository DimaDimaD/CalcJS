function makeObjectDeepCopy(obj) {

    if( typeof obj != "object" ) {
        return 'Некорректный ввод.';
    }

    else {
        let copyObj = {};

        for (let element in obj) {
            copyObj[element] = obj[element];
        }

        return copyObj;
    }
}