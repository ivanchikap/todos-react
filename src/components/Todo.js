import {Link} from "react-router-dom";

const Todo = ({todo, onDelete, onCheckbox}) => {
    return (
        <div className='col-4 mb-3'>
            <div className={todo.checked ? 'card active' : 'card'}>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                    <div className="card__actions mb-3">
                        <Link to={todo.id.toString()} state={{todo: todo}} className="btn btn-primary">edit</Link>
                        <button onClick={() => onDelete(todo.id)} className="btn btn-danger mx-2">delete</button>
                    </div>
                    <div className="form-check">
                        <label>
                            <span>{todo.checked ? 'Виконане' : 'Активне'}</span>
                            <input onChange={() => onCheckbox(todo.title, todo.description, todo.id, todo.checked, todo.creationDate)} checked={todo.checked} className="form-check-input" type="checkbox"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;