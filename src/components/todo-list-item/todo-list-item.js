import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            };
        })
    };

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            };
        })
    };

    onTrashclick = () => {

    }

    render() {

        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

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
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button className="btn btn-trash btn-outline-danger"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o "></i>
                </button>
                <button className="btn btn-exclamation btn-outline-success"
                    onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation "></i>
                </button>
            </span>
        );
    }
}


