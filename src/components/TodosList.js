import Todo from "./Todo";

const TodosList = ({todos, onCheckbox, onEdit, onDelete}) => {
    return (
        <div className='row'>
            {todos.map((todo) => (<Todo onDelete={onDelete} onEdit={onEdit} key={todo.id} onCheckbox={onCheckbox} todo={todo}/>))}
        </div>
    );
};

export default TodosList;