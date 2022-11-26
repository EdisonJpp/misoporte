import { emailValidate } from '../../../utils/helper';

const checkValue = (email, password) => {
    if (email === '') {
        return 1;
    } if (password === '') {
        return 2;
    } if (fullName === '') {
        return 3;
    } else if (emailValidate.test(email) === false) {
        return 4;
    } else if (password.length < 8) {
        return 5;
    } else {
        return 6
    }
}


export { checkValue };