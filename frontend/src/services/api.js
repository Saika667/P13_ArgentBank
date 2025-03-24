export const loginApi = async (userData) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'An error occurred');
    }

    const data = await response.json();
    return data.body;
}

export const getUser = async () => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred');
    }

    const data = await response.json();
    return data.body;
}

export const updateUser = async (userData) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred');
    }

    const data = await response.json();
    return data.body;
}