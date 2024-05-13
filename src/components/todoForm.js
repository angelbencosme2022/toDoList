import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        placeholder={props.edit ? 'Update your item' : 'Add a todo'}
        value={input}
        onChange={handleChange}
        name='text'
        className={`todo-input ${props.edit ? 'edit' : ''}`}
        ref={inputRef}
      />
      <button onClick={handleSubmit} className={`todo-button ${props.edit ? 'edit' : ''}`}>
        {props.edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  );
}

export default TodoForm;
