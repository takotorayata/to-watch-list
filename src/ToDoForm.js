import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="What to watch..."/>
            <button class="add">Add</button>
        </form>
    );
};

export default ToDoForm;