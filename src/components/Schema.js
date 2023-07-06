import * as yup from 'yup';

export const contactSchema = yup.object({

    name: yup.string().min(3).max(25).required("Please enter your name"),
    email: yup.string().email().required("Please enter your email"),
    project: yup.string().min(15).max(100).required("Please write your project")

});

