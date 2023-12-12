import {useRef} from "react";

const EditForm = ({onEditTodo, onCloseEditForm}) => {
    const inputRef = useRef();
    const inputRef1 = useRef();
    const formHandler = (e) => {
        e.preventDefault();
        onEditTodo(inputRef.current.value, inputRef1.current.value)
        e.target.reset()
        inputRef.current.focus()
    }
    return (
        <div className='edit'>
            <h2>Edit todo</h2>
            <form className='edit__form d-flex gap-2' onSubmit={formHandler}>
                <input className='form-control' placeholder='title' type="text" ref={inputRef}/>
                <input className='form-control' placeholder='description' type="text" ref={inputRef1}/>
                <button className='btn btn-success flex-shrink-0' type='submit'>edit todo</button>
            </form>
            <button onClick={onCloseEditForm} className='btn btn-secondary'>X</button>
        </div>
    );
};

export default EditForm;