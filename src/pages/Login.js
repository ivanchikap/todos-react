import React, {useEffect, useRef, useState} from 'react';
import api from "../helpers/api";
import Error from "../components/Error";
import { useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Login = ({onLogin}) => {
    const navigate = useNavigate()
    const nameRef = useRef()
    const emailRef = useRef()
    const [error, setError] = useState()
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const isLogined = JSON.parse(sessionStorage.getItem("logined"));

        if (isLogined) {
            navigate(-1)
            toast.warning('You have already logged in. That`s why you have redirected back!')
        }

        const fetchLoginData = async () => {
            try {
                const usersFromApi = await api.getLoginData();
                setUsers(usersFromApi);
            } catch (e) {
                setError(e)
            }
        }
        fetchLoginData()
    }, [])

    const formSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const isUserValid = users.some((user) => user.name === name && user.email === email);
        onLogin(isUserValid)
        if (isUserValid) {
            sessionStorage.setItem("logined", "true")
            toast.success('You logged in successfully!')
            return
        }
        toast.error('False login or email!')
    }

    return (
        <div>
            <h2>Login page!</h2>
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
                <button type="submit" className="btn btn-primary">Login</button>
            </form>}
        </div>
    );
};

export default Login;