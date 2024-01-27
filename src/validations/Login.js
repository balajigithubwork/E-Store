import * as yup from "yup"
export const Schema=yup
.object({
    Email:yup
    .string()
    .required('Email is required')
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/,'Email in invalid'),
    password:yup
    .string()
    .required('password is required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'length shoud be 8,1 Uppercase,1 Lowercase,1 specialcharacter,1 numerical')
})
