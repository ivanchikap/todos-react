import Todo from "./Todo";

const TodosList = ({todos, onDelete, onCheckbox}) => {
    return (
        <div className='row'>
            {todos.map((todo) => <Todo onCheckbox={onCheckbox} onDelete={onDelete} key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TodosList;