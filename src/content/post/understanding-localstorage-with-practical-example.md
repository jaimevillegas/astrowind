---
publishDate: 2024-01-14T00:00:00Z
author: Jaime Villegas
title: Understanding localStorage with a Practical Example
excerpt: Learn how to effectively use browser's localStorage API with practical examples. This guide covers basic operations, best practices, and a complete todo list application implementation.
image: https://images.unsplash.com/photo-1457904375453-3e1fc2fc76f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: Tutorials
tags:
  - javascript
  - web storage
  - react
  - frontend
metadata:
  canonical: https://astrowind.vercel.app/understanding-localstorage-with-practical-example
---

The localStorage API provides a simple way to store key-value pairs in the browser. It's perfect for saving user preferences, form data, or any other data that needs to persist across browser sessions. In this guide, we'll explore localStorage through practical examples, including building a complete todo list application.

## Understanding localStorage Basics

The localStorage API provides four main methods:

```javascript
// Setting an item
localStorage.setItem('key', 'value');

// Getting an item
const value = localStorage.getItem('key');

// Removing an item
localStorage.removeItem('key');

// Clearing all items
localStorage.clear();
```

Important things to note:
- localStorage only stores strings
- It persists even after the browser is closed
- It has a storage limit (usually around 5-10 MB)
- It's synchronous (can block the main thread)

## Working with Complex Data Types

Since localStorage only stores strings, we need to use JSON methods when working with objects or arrays:

```javascript
// Storing an object
const user = {
  name: 'John Doe',
  age: 30,
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

localStorage.setItem('user', JSON.stringify(user));

// Retrieving an object
const savedUser = JSON.parse(localStorage.getItem('user'));
```

## Practical Example: Todo List Application

Let's build a complete todo list application using React and localStorage. This example will demonstrate real-world usage of localStorage.

```jsx
import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="w-full p-2 border rounded"
        />
      </form>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? 'line-through' : ''}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

## Creating a Custom Hook for localStorage

To make working with localStorage easier, we can create a custom hook:

```javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use provided initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage whenever storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

Using the custom hook:

```jsx
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [user, setUser] = useLocalStorage('user', null);

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <div>Current theme: {theme}</div>
    </div>
  );
}
```

## Best Practices and Error Handling

1. **Always Use Try-Catch Blocks**
```javascript
function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    if (error.name === 'QuotaExceededError') {
      console.error('localStorage quota exceeded');
    }
    return false;
  }
}
```

2. **Check for localStorage Availability**
```javascript
function isLocalStorageAvailable() {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}
```

3. **Handle Complex Data Structures**
```javascript
function getItem(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}
```

## Security Considerations

1. **Never Store Sensitive Data**
```javascript
// DON'T do this
localStorage.setItem('creditCard', '1234-5678-9012-3456');

// Instead, store non-sensitive session data
localStorage.setItem('userPreferences', JSON.stringify({
  theme: 'dark',
  language: 'en'
}));
```

2. **Sanitize Data Before Storage**
```javascript
function sanitizeAndStore(key, value) {
  // Remove any potentially harmful characters
  const sanitized = value.replace(/<[^>]*>?/gm, '');
  localStorage.setItem(key, sanitized);
}
```

## Common Use Cases

1. **Theme Preferences**
```javascript
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleTheme}>
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

2. **Form Data Persistence**
```javascript
function PersistentForm() {
  const [formData, setFormData] = useLocalStorage('formData', {
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}
```

## Conclusion

localStorage is a powerful API for client-side storage that can enhance your web applications by:
- Persisting user preferences
- Saving form data
- Caching application data
- Improving user experience with saved states

Remember to:
- Handle errors appropriately
- Never store sensitive information
- Use JSON methods for complex data types
- Consider storage limits
- Implement proper security measures

For more information, check out the [MDN Web Docs on Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).
