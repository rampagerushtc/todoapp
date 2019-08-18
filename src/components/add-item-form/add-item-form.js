import React, { Component } from 'react';
import './add-item-form.css';


export default class AddItemForm extends Component {

    render() {

        const {addItem} = this.props;
        return (
            <div className="add-item-form d-flex">
                <button 
                    className="btn btn-outline-secondary"
                    onClick={ addItem }>
                    <span>Add new item</span>
                </button>
            </div>
        )
    }

}