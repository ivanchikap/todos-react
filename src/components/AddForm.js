import {useRef} from "react";

const AddForm = ({onAddForm}) => {
    const titleRef = useRef()
    const descRef = useRef()

    const formHandler = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descRef.current.value;
        onAddForm(title, description);
    }
    return (
        <div className='my-3'>
            <h4>Add todo form!</h4>
            <form onSubmit={formHandler}>
                <label className="form-group">
                    <span>Enter title</span>
                    <input ref={titleRef} type="text" className="form-control" placeholder="some title"/>
                </label>
                <label className="form-group">
                    <span>Enter description</span>
                    <input ref={descRef} type='text' className="form-control" placeholder="some desc"/>
                </label>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default AddForm;