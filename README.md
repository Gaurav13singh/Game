# API.js Documentation

## Overview
`api.js` is a JavaScript module designed to handle API interactions for the application. It provides functions to send requests and process responses from the server.
Make sure to change your base url in `api.js` file.

## Features
- Simplified API request handling.
- Supports GET, POST, PUT, and DELETE methods.
- Error handling for failed requests.

## Usage

### Importing the Module
```javascript
const api = require('./api');
```

### Example Usage
#### GET Request
```javascript
api.get('/endpoint')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

#### POST Request
```javascript
api.post('/endpoint', { key: 'value' })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

## Functions

### `get(url)`
- **Description**: Sends a GET request to the specified URL.
- **Parameters**: 
    - `url` (string): The endpoint to send the request to.
- **Returns**: A promise resolving to the response data.

### `post(url, data)`
- **Description**: Sends a POST request with data to the specified URL.
- **Parameters**: 
    - `url` (string): The endpoint to send the request to.
    - `data` (object): The payload to send.
- **Returns**: A promise resolving to the response data.

### `put(url, data)`
- **Description**: Sends a PUT request to update data at the specified URL.
- **Parameters**: 
    - `url` (string): The endpoint to send the request to.
    - `data` (object): The payload to update.
- **Returns**: A promise resolving to the response data.

### `delete(url)`
- **Description**: Sends a DELETE request to the specified URL.
- **Parameters**: 
    - `url` (string): The endpoint to send the request to.
- **Returns**: A promise resolving to the response data.

## Error Handling
All functions return a promise. Use `.catch()` to handle errors:
```javascript
api.get('/invalid-endpoint')
    .catch(error => console.error('Error:', error));
```

## License
This project is licensed under the MIT License.
