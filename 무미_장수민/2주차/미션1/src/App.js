import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const handleToggleDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>UMC Study Plan</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="스터디 계획을 작성해보세요!"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleAddTodo()}
        />
        <button onClick={handleAddTodo}>할 일 추가</button>
      </div>
      <div className="lists-container">
        <div className="todo-list">
          <h2>해야할 일</h2>
          {todos.filter(todo => !todo.done).map(todo => (
            <div key={todo.id} className="todo-item">
              {todo.text}
              <button onClick={() => handleToggleDone(todo.id)}>완료</button>
            </div>
          ))}
        </div>
        <div className="done-list">
          <h2>해낸 일</h2>
          {todos.filter(todo => todo.done).map(todo => (
            <div key={todo.id} className="done-item">
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
