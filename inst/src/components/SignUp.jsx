import React from 'react';
import {Form, withFormik} from "formik";
import {Field} from "formik";

const SignUpForm = ({signUpHandle}) => {

    return (
        <div>
            <Form>
                <div>
                    <Field placeholder="Enter login..." name="login"/>
                </div>
                <div>
                    <Field type='password' placeholder="Enter password..." name="password"/>
                </div>
                <div>
                    <Field placeholder="Name..." name="name"/>
                </div>
                <div>
                    <Field placeholder="Description..." name="description"/>
                </div>
                <div>
                    <Field placeholder="Image link..." name="img"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </Form>
        </div>
    );
};

const SignUp = withFormik({
    mapPropsToValues(){
        return{
            login: '',
            password: '',
            name: '',
            description: '',
            img: ''
        }
    },
    handleSubmit(values, {props}) {
        props.signUpHandle({login: values.login, password: values.password, name:values.name, description:values.description, img:values.img});
    },
})(SignUpForm);

export default SignUp;