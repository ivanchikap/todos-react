import {useEffect, useState} from "react";

const Filter = ({todos, onFilter}) => {
    const [selectValue, setSelectValue] = useState('all');
    const [inputValue, setInputValue] = useState('')
    const options = [
        {value: 'all', title: "Всі"},
        {value: 'checked', title: "Виконані"},
        {value: 'active', title: "Активні"},
    ]

    useEffect(() => {
        filterTodos()
    }, [selectValue, inputValue])

    const selectHandler = (e) => {
        setSelectValue(e.target.value);
    }

    const filterTodos = () => {
        let filteredTodos = [...todos];

        if (inputValue) {
            filteredTodos = filteredTodos.filter((todo) => todo.title.toLowerCase().includes(inputValue.toLowerCase()))
        }

        if (selectValue !== 'all') {
            filteredTodos = filteredTodos.filter((todo) => {
                if (selectValue === 'checked') {
                    return todo.checked;
                } else if (selectValue === 'active') {
                    return !todo.checked;
                }
                return true;
            });
        }

        onFilter(filteredTodos)
    }

    return (
        <div className='filter my-3'>
            <h3>Filter your todos!</h3>
            <select value={selectValue} onChange={selectHandler} className='form-select' name="select">
                {options.map((option) => <option key={option.value} value={option.value}>{option.title}</option>)}
            </select>
            <label className='form-control'>
                <span>&#x1F50D;</span>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </label>
        </div>
    );
};

export default Filter;