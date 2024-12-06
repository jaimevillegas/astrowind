---
publishDate: 2024-01-14T00:00:00Z
author: Jaime Villegas
title: How to get API data using Axios on React - A step by step guide
excerpt: Learn how to efficiently fetch and handle API data in your React applications using Axios. This comprehensive guide covers installation, basic usage, and best practices.
image: https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: Tutorials
tags:
  - react
  - axios
  - api
  - javascript
metadata:
  canonical: https://astrowind.vercel.app/how-to-get-api-data-using-axios-on-react
---

In modern web development, fetching and handling API data is a crucial skill. While React applications can use the built-in `fetch` API, Axios has become a popular alternative due to its intuitive API, rich features, and excellent browser support. This guide will walk you through implementing Axios in your React application.

## Prerequisites

Before we begin, make sure you have:
- Node.js installed on your system
- A React project set up
- Basic understanding of React and JavaScript

## Step 1: Installing Axios

First, let's install Axios in your React project. Open your terminal and run:

```bash
npm install axios
```

or if you're using yarn:

```bash
yarn add axios
```

## Step 2: Basic Implementation

Let's start with a simple example of how to fetch data from an API. Create a new component called `UserList.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

## Step 3: Using Async/Await

For cleaner code, you might prefer using async/await syntax. Here's how to refactor the previous example:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.example.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ... rest of the component remains the same
}
```

## Step 4: Creating an Axios Instance

For larger applications, it's recommended to create a custom Axios instance with predefined configuration:

```jsx
// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // Add any default headers here
  }
});

export default api;
```

Now you can use this instance in your components:

```jsx
import api from '../api/axios';

// In your component
const response = await api.get('/users');
```

## Step 5: Handling Different HTTP Methods

Axios supports all common HTTP methods. Here are some examples:

```jsx
// GET request
const getUser = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};

// POST request
const createUser = async (userData) => {
  const response = await axios.post('/users', userData);
  return response.data;
};

// PUT request
const updateUser = async (id, userData) => {
  const response = await axios.put(`/users/${id}`, userData);
  return response.data;
};

// DELETE request
const deleteUser = async (id) => {
  const response = await axios.delete(`/users/${id}`);
  return response.data;
};
```

## Best Practices

1. **Error Handling**: Always implement proper error handling:
```jsx
try {
  const response = await axios.get('/api/data');
  // Handle success
} catch (error) {
  if (error.response) {
    // Server responded with an error status
    console.error('Server Error:', error.response.data);
  } else if (error.request) {
    // Request was made but no response received
    console.error('Network Error:', error.request);
  } else {
    // Something else went wrong
    console.error('Error:', error.message);
  }
}
```

2. **Request Cancellation**: Use AbortController to cancel requests when component unmounts:
```jsx
useEffect(() => {
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data', {
        signal: controller.signal
      });
      // Handle data
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request cancelled');
      } else {
        // Handle error
      }
    }
  };

  fetchData();

  return () => controller.abort();
}, []);
```

3. **Loading and Error States**: Always maintain loading and error states for better user experience:
```jsx
const [state, setState] = useState({
  data: null,
  loading: true,
  error: null
});
```

## Conclusion

Axios is a powerful tool for handling HTTP requests in React applications. It provides a simple, intuitive API while offering advanced features like request/response interceptors, automatic JSON data transformation, and request cancellation. By following these patterns and best practices, you can build robust and maintainable React applications that efficiently handle API data.

Remember to:
- Handle errors appropriately
- Implement loading states for better UX
- Use async/await for cleaner code
- Create axios instances for consistent configuration
- Implement request cancellation when needed

For more information, check out the [Axios documentation](https://axios-http.com/docs/intro) and the [React documentation](https://react.dev/learn).
