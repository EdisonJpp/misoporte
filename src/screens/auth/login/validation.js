import { emailValidate } from '../../../utils/helper';

const checkValue = (email, password) => {
    if (email === '') {
        return 1;
    } if (password === '') {
        return 2;
    } else if (emailValidate.test(email) === false) {
        return 3;
    } else if (password.length < 8) {
        return 4;
    } else {
        return 5;
    }
}


export { checkValue };