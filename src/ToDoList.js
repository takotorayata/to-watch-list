import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}  handleFilter={handleFilter}/>
                )
            })}
            <button class="delete" style={{margin: '20px'}} onClick={handleFilter}>Delete watched</button>
        </div>
    );
};

export default ToDoList;