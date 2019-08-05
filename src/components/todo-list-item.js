import React from 'react';
import './todo-list-item.css'

const TodoListItem = ( { label, important = false } ) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
    <div>
        <span   className="todo-list-item"
            style = { style }> 
            { label }
        </span>
        <button className="btn">
            <i className="fa fa-trash-o"></i>
        </button>
        <button className="btn">
            <i className="fa fa-exclamation"></i>
        </button>
    </div>

    );
    
}

export default TodoListItem;