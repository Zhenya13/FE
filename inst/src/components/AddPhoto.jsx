import React from 'react';
import {Form, withFormik} from "formik";
import {Field} from "formik";

const AddPhotoForm = ({addPhotoHandle}) => {

    return (
        <div>
            <Form>
                <div>
                    <Field placeholder="Image link..." name="img"/>
                </div>
                <div>
                    <Field placeholder="Description..." name="description"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </Form>
        </div>
    );
};

const AddPhoto = withFormik({
    mapPropsToValues(){
        return{
            img: '',
            description: '',
        }
    },
    handleSubmit(values, {props}) {
        props.addPhotoHandle(values.img, values.description);
    },
})(AddPhotoForm);

export default AddPhoto;