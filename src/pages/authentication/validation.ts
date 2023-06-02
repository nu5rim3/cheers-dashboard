import * as yup from 'yup';

const passwordRegex = RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);

export const validationsSignUp = yup.object().shape({
    email: yup.string().email().required('Required'),
    password: yup.string().matches(passwordRegex, 'Weak Password').required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});

export const validationsSignIn = yup.object().shape({
    email: yup.string().email().required('Required'),
    password: yup.string().matches(passwordRegex, 'Password too Weak (Ex: Test@123)').required('Required'),
});

export const validationsReset = yup.object().shape({
    email: yup.string().email().required('Required'),
});
