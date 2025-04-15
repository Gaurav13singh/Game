const BASE_URL = 'http://localhost:5000/api/v1';//Add your base URL here
// const BASE_URL = 'https://api.example.com/v1'; // Example for production

// 🔐 Helper: Get auth headers with token
function getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': token } : {})
    };
}

// 🔹 POST JSON
async function postJSON(url, data) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
    });
    console.log(data)
    return response;
}

// 🔹 GET JSON
async function getJSON(url) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    return response.json();
}

// 🔹 PUT JSON
async function putJSON(url, data) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
    });
    return response.json();
}

// 🔹 DELETE JSON
async function deleteJSON(url) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
    });
    return response.json();
}
