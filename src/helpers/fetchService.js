const apiUrl = 'http://localhost:4000/todos'

const getTodos = async () => {
    const res = await fetch(apiUrl)
    if (!res.ok) {
        throw new Error(`Fetch error: ${res.status} ${res.statusText}`)
    }
    const result = await res.json()
    return result
}

const deleteTodo = async (id) => {
    const res = await fetch(`${apiUrl}/${id}`, {method: 'delete'})
    if (!res.ok) {
        throw new Error(`Fetch error: ${res.status} ${res.statusText}`)
    }
    const result = await res.json()
    return result
}

const editTodo = async (title, description, id) => {
    const payload = {
        title,
        description,
        checked: false,
        creationDate: Date.now()
    }
    const res = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            // Якщо сервер вимагає авторизації, додайте токен чи інші заголовки тут
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        throw new Error(`Fetch error: ${res.status} ${res.statusText}`)
    }
    const result = await res.json()
    return result
}

const postTodo = async (title, description) => {
    const payload = {
        title,
        description,
        checked: false,
        creationDate: Date.now()
    }
    const res = await fetch(apiUrl, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // Якщо сервер вимагає авторизації, додайте токен чи інші заголовки тут
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        throw new Error(`Fetch error: ${res.status} ${res.statusText}`)
    }
    const result = await res.json()
    return result
}

export default {postTodo, getTodos, deleteTodo, editTodo};