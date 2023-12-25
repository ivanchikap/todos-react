import Spinner from "../components/Spinner";
import fetchService from "../helpers/fetchService";
import {useEffect, useState} from "react";
import TodosList from "../components/TodosList";
import AddTodo from "../components/AddTodo";
import Statistic from "../components/Statistic";
import Filter from "../components/Filter";

const TodosPage = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [noTodos, setNoTodos] = useState(!!todos.length)
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await fetchService.getTodos()
                setTodos(data)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        setFilteredTodos(todos);
        setNoTodos(!!todos.length)
    }, [todos])

    const checkboxHandler = (id) => {
        setTodos((todos) => todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, checked: !todo.checked}
            }
            return todo
        }))
    }

    const filterHandler = (todosFromFilter) => {
        setFilteredTodos(todosFromFilter);
    }

    const addHandler = async (title, description) => {
        setIsLoading(true);
        const titl = title || 'default title';
        const desc = description || 'default desc';
        const todo = await fetchService.postTodo(titl, desc);
        setTodos((prevTodos) => [...prevTodos, todo])
        setIsLoading(false);
    }

    const noTodosHandler = () => {
        setNoTodos(true)
    }

    const deleteHandler = async (id) => {
        setIsLoading(true);
        const res = await fetchService.deleteTodo(id)
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
        setIsLoading(false);
    }
    return (
        <div>
            <div className='statistic-wrapper'>
                {!error && !isLoading && <Statistic todos={todos}/>}
            </div>
            {error && <p>{error.message}</p>}
            {isLoading && <Spinner/>}
            {!noTodos && !isLoading &&
                <button onClick={noTodosHandler} className='btn btn-success'>Додати завдання</button>}
            {noTodos && <AddTodo onAddTodo={addHandler}/>}
            {todos.length > 1 && <Filter todos={todos} onFilterChange={filterHandler}/>}
            {!todos.length && !isLoading && <h2>Наразі у вас немає завдань</h2>}
            {!error && !isLoading && !!todos.length &&
                <TodosList onDelete={deleteHandler} todos={filteredTodos}
                           onCheckbox={checkboxHandler}/>}
        </div>
    );
};

export default TodosPage;