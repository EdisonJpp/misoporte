import { emailValidate } from '../../utils/helper';

const checkValue = (name, email, phoneNumber) => {
    if (name === '') {
        return 1;
    } if (email === '') {
        return 2;
    } if (phoneNumber === '') {
        return 3;
    } else if (phoneNumber.length != 10) {
        return 4;
    } else if (emailValidate.test(email) === false) {
        return 5;
    } else {
        return 6;
    }
}


export { checkValue };