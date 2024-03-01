const apiUrl = "http://localhost:4000"

const getLoginData = async () => {
    const res = await fetch(`${apiUrl}/users`)
    if (!res.ok) {
        throw new Error(`Fetch login error: ${res.status} ${res.statusText}`)
    }
    return await res.json()
}

const getTodos = async () => {
    const res = await fetch(`${apiUrl}/todos`)
    if (!res.ok) {
        throw new Error(`Error during fetch todos from server! ${res.status} ${res.statusText}`)
    }

    return await res.json()
}

const editTodo = async ({id, title, description, checked, creationDate}) => {
    const payload = {
        title,
        description,
        checked,
        creationDate,
    }
    const res = await fetch(`${apiUrl}/todos/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    if (!res.ok) {
        throw new Error(`Error during patch todo on server! ${res.status} ${res.statusText}`)
    }
    return await res.json()
}

const deleteTodo = async (id) => {
    const res = await fetch(`${apiUrl}/todos/${id}`, {
        method: 'delete'
    })
    if (!res.ok) {
        throw new Error(`Error during fetch todos from server! ${res.status} ${res.statusText}`)
    }

    return await res.json()
}

const postUser = async (name, email) => {
    const payload = {
        name, email
    }
    const res = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(payload)
    })

    if (!res.ok) {
        throw new Error(`Error during post user: ${res.statusText} ${res.statusCode}`)
    }

    return await res.json()
}

const postTodo = async (title, description, checked, creationDate) => {
    const payload = {
        title, description, checked: checked || false, creationDate: Date.now()
    }
    const res = await fetch(`${apiUrl}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(payload)
    })

    if (!res.ok) {
        throw new Error(`Error during post user: ${res.statusText} ${res.statusCode}`)
    }

    return await res.json()
}

export default {getLoginData, getTodos, editTodo, deleteTodo, postUser, postTodo}