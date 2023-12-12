import {useRef} from "react";

const AddTodo = ({onAddTodo}) => {
    const inputRef = useRef();
    const inputRef1 = useRef();
    const formHandler = (e) => {
        e.preventDefault();
        onAddTodo(inputRef.current.value, inputRef1.current.value)
        e.target.reset()
        inputRef.current.focus()
    }
    return (
        <div className='my-4'>
            <h2>Add ToDo</h2>
            <form className='d-flex gap-2' onSubmit={formHandler}>
                <input className='form-control' placeholder='title' type="text" ref={inputRef}/>
                <input className='form-control' placeholder='description' type="text" ref={inputRef1}/>
                <button className='btn btn-success flex-shrink-0' type='submit'>add todo</button>
            </form>
        </div>

    );
};

export default AddTodo;