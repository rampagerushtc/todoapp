import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);
    }


    render() {

        const { label, important = false } = this.props;
        const style = {
            color: important ? 'rgb(32, 95, 190)' : 'black',
            fontWeight: important ? '1000' : '500'
        }

        return (
            <span className="todo-list-item">
                <span className="todo-list-item-label"
                    style={style}
                    onClick={ this.onLabelClick }>
                       
                    {label}
                </span>
                <button className="btn btn-trash btn-outline-danger">
                    <i className="fa fa-trash-o "></i>
                </button>
                <button className="btn btn-exclamation btn-outline-success">
                    <i className="fa fa-exclamation "></i>
                </button>
            </span>

        );

    }
}


