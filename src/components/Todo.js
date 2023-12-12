import EditForm from "./EditForm";
import {useState} from "react";

const Todo = ({todo, onCheckbox, onDelete, onEdit}) => {
    const [showEditForm, setShowEditForm] = useState(false);

    const editHandler = () => {
        setShowEditForm(true);
    }

    const editFormHandler = (formTitle, formDesc) => {
        setShowEditForm(false);
        onEdit(todo.id, formTitle, formDesc)
    }

    const closeEditHandler = () => {
        setShowEditForm(false);
    }

    return (
        <div className='col-4 pb-3'>
            <div className={`card ${todo.checked ? 'checked' : ''}`}>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{todo.creationDate}</h6>
                    <p className="card-text">{todo.description}</p>
                    <div className='card__actions'>
                        <button onClick={editHandler} className='btn btn-secondary'>edit</button>
                        <button onClick={() => onDelete(todo.id)} className='btn btn-danger'>remove</button>
                        <label>
                            <span>done</span>
                            <input type="checkbox" onChange={() => onCheckbox(todo.id)} checked={todo.checked}/>
                        </label>
                    </div>
                </div>
            </div>

            {showEditForm && <EditForm onEditTodo={editFormHandler} onCloseEditForm={closeEditHandler}/>}
        </div>
    );
};

export default Todo;