import {useRef, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import fetchService from "../helpers/fetchService";
import Spinner from "./Spinner";

const EditForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const inputRef = useRef();
    const inputRef1 = useRef();

    const editHandler = async (id, title, description) => {
        const res = await fetchService.editTodo(title, description, id);
    }

    const formHandler = (e) => {
        e.preventDefault();
        editHandler(params.id, inputRef.current.value, inputRef1.current.value)
        e.target.reset()
        navigate(-1);
    }
    return (
        <div className='edit'>
            <h2>Edit todo</h2>
            <form className='edit__form d-flex gap-2' onSubmit={formHandler}>
                <input className='form-control' placeholder='title' type="text" ref={inputRef}/>
                <input className='form-control' placeholder='description' type="text" ref={inputRef1}/>
                <button className='btn btn-success flex-shrink-0' type='submit'>edit todo</button>
            </form>
            <button onClick={() => navigate(-1)} className='btn btn-secondary'>X</button>
        </div>
    );
};

export default EditForm;