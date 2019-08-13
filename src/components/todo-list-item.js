import React from 'react';
import './todo-list-item.css'

const TodoListItem = ( { label, important = false } ) => {
    
    const style = {
        color: important ? 'rgb(32, 95, 190)' : 'black',
        fontWeight: important ? '1000' : '500'
    }

    return (
    <div>
        <span   className="todo-list-item"
            style = { style }> 
            { label }
        </span>
        <button className="btn btn-trash btn-outline-danger">
            <i className="fa fa-trash-o "></i>
        </button>
        <button className="btn btn-exclamation btn-outline-success">
            <i className="fa fa-exclamation "></i>
        </button>
    </div>

    );
    
}

export default TodoListItem;