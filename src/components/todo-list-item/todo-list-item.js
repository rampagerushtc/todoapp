import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    onTrashclick = () => {

    }

    render() {

        const { label, onDeleted,
            onToggleImportant,
            onToggleDone,
            important, done } = this.props;

        let classNames = 'todo-list-item d-flex';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }


        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>
                <button className="btn btn-trash btn-outline-danger"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o "></i>
                </button>
                <button className="btn btn-exclamation btn-outline-success"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation "></i>
                </button>
            </span>
        );
    }
}


