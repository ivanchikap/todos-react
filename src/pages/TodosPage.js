import {useEffect, useState} from "react";
import api from "../helpers/api";
import Statistics from "../components/Statistics";
import TodosList from "../components/TodosList";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import AddForm from "../components/AddForm";
import Filter from "../components/Filter";
import debounce from "debounce";

const TodosPage = () => {
    const [todos, setTodos] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            try {
                setIsLoading(true);
                const data = await api.getTodos();
                setTodos(data);
                setFilteredTodos(data)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        }
        getTodos()
    }, [])

    const deleteHandler = async (id) => {
        try {
            setIsLoading(true);
            await api.deleteTodo(id);
        } catch (e) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    const checkboxHandler = async (title, description, id, checked, creationDate) => {
        try {
            setIsLoading(true)
            await api.editTodo({id, title, description, checked: !checked, creationDate})
        } catch (e) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
        setTodos((todos) => todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, checked: !todo.checked}
            }
            return todo
        }))
    }

    const addFormHandler = async (title, description) => {
        try {
            setIsLoading(true)
            const res = await api.postTodo(title, description)
            setTodos((prevTodos) => [...prevTodos, res])
        } catch (e) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    const filterHandler = debounce((todosFromFilter) => {
        setFilteredTodos(todosFromFilter)
    }, 1000)

    if (error) {
        return <Error error={error}/>
    }

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <h2>Todos Page!</h2>
            <Statistics todos={todos}/>
            <AddForm onAddForm={addFormHandler}/>
            <Filter todos={todos} onFilter={filterHandler}/>
            <TodosList onCheckbox={checkboxHandler} onDelete={deleteHandler} todos={filteredTodos}/>
        </div>
    );
};

export default TodosPage;