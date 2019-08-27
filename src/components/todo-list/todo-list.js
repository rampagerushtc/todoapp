import React from 'react';
import TodoListItem from '../todo-list-item';
import '../todo-list/todo-list.css';

const TodoList = ({ todos, onDeleted,
    onToggleImportant,
    onToggleDone, searchText, activeFilter
}) => {
    const elements = todos.map((item) => {
        if (activeFilter === 'Active') {
            if (item.label.toLowerCase().includes(searchText.toLowerCase()) && !item.done) {
                const { id, ...itemProps } = item;

                return (
                    <li key={id} className="list-group-item">
                        <TodoListItem
                            {...itemProps}
                            onDeleted={() => onDeleted(id)}
                            onToggleImportant={() => onToggleImportant(id)}
                            onToggleDone={() => onToggleDone(id)}
                        />
                    </li>
                )
            }
        } else if (activeFilter === 'Done') {
            if (item.label.toLowerCase().includes(searchText.toLowerCase()) && item.done) {
                const { id, ...itemProps } = item;

                return (
                    <li key={id} className="list-group-item">
                        <TodoListItem
                            {...itemProps}
                            onDeleted={() => onDeleted(id)}
                            onToggleImportant={() => onToggleImportant(id)}
                            onToggleDone={() => onToggleDone(id)}
                        />
                    </li>
                )
            }
        } else {
            if (item.label.toLowerCase().includes(searchText.toLowerCase())) {
                const { id, ...itemProps } = item;

                return (
                    <li key={id} className="list-group-item">
                        <TodoListItem
                            {...itemProps}
                            onDeleted={() => onDeleted(id)}
                            onToggleImportant={() => onToggleImportant(id)}
                            onToggleDone={() => onToggleDone(id)}
                        />
                    </li>
                )
            }
        }
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;