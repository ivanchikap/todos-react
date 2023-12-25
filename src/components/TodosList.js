import Todo from "./Todo";

const TodosList = ({todos, onCheckbox, onDelete}) => {
    return (
        <div className='row'>
            {todos.map((todo) => (<Todo onDelete={onDelete} key={todo.id} onCheckbox={onCheckbox} todo={todo}/>))}
        </div>
    );
};

export default TodosList;