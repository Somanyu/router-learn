import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    username: Yup.string()
        .min(0, 'Too Short!')
        .max(6, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(0, 'Too Short!')
        .max(6, 'Too Long!')
        .required('Required'),
});

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        // e.preventDefault();
        if (values.username === "admin" && values.password === "admin") {
            localStorage.setItem("admin", "admin");
            // window.alert("admin!!", values.username, values.password)
            navigate("/dashboard");
        } else {
            window.alert("You are not admin!!")
            // navigate("/signIn");
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                validationSchema={SignInSchema}
                onSubmit={handleSubmit}
            >

                {({ errors, touched }) => (
                    <div className="card w-50 m-auto p-3 mt-3">
                        <Form>
                            <div className="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <Field class="form-control" name="username" />
                                {errors.username && touched.username && (
                                    <div>{errors.username}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <Field class="form-control" name="password" />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                            </div>
                            <button className="btn btn-outline-primary" type="submit">Submit</button>
                        </Form>
                    </div>
                )}

            </Formik>
            
        </div>
    );
};

export default Login;
