import Error from "../components/Error";
import React, {useRef, useState} from "react";
import api from "../helpers/api";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [error, setError] = useState(null)
    const nameRef = useRef()
    const emailRef = useRef()
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.postUser(nameRef.current.value, emailRef.current.value)
        } catch (e) {
            setError(e)
        }
        if (!error) {
            toast(`You register successfully. You can log in!`)
            navigate('/login', {replace: true})
        }
    }

    return (
        <div>
            <h2>Register Page!</h2>
            {error && <Error error={error}/>}
            {!error && <form className='login__form' onSubmit={formSubmit}>
                <div className="form-group">
                    <label>
                        <span>Your login</span>
                        <input ref={nameRef} type="text" className="form-control" placeholder="my_login"/>
                    </label>

                </div>

                <div className="form-group my-2">
                    <label>
                        <span>Enter email</span>
                        <input ref={emailRef} type="email" className="form-control" placeholder="some@email.com"/>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>}
        </div>
    );
};

export default RegisterPage;