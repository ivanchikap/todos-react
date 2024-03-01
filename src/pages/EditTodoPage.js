import React, {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import api from "../helpers/api";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

const EditTodoPage = () => {
    const {state} = useLocation()

    const [title, setTitle] = useState(state.todo.title);
    const [description, setDescription] = useState(state.todo.description)
    const [checked, setChecked] = useState(state.todo.checked)


    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
           await api.editTodo({...state.todo, title, description, checked})
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
            navigate('/todos')
        }
    }
    return (
        <div>
            <h2>Edit todo page!</h2>
            {error && <Error error={error}/>}
            {loading && <Spinner/>}
            {!error && !loading && <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>
                        <span>Title</span>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="some title"/>
                    </label>

                </div>

                <div className="form-group my-2">
                    <label>
                        <span>Description</span>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" placeholder="some description"/>
                    </label>
                </div>

                <div className="form-group my-2">
                    <label>
                        <span>Done</span>
                        <input onChange={(e) => setChecked(e.target.checked)} checked={checked} type="checkbox"/>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>}
        </div>
    );
};

export default EditTodoPage;