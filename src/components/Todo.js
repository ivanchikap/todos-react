import {Link} from "react-router-dom";

const Todo = ({todo, onCheckbox, onDelete}) => {
    return (
        <div className='col-4 pb-3'>
            <div className={`card ${todo.checked ? 'checked' : ''}`}>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{todo.creationDate}</h6>
                    <p className="card-text">{todo.description}</p>
                    <div className='card__actions'>
                        <Link to={todo.id.toString()} className='btn btn-secondary'>edit</Link>
                        <button onClick={() => onDelete(todo.id)} className='btn btn-danger'>remove</button>
                        <label>
                            <span>done</span>
                            <input type="checkbox" onChange={() => onCheckbox(todo.id)} checked={todo.checked}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;