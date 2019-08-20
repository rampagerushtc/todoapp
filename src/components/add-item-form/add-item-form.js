import React, { Component } from 'react';
import './add-item-form.css';


export default class AddItemForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {

        this.setState({
            label: e.target.value.toUpperCase()
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {

        return (
            <form className="add-item-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text" 
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What deeds to be done"
                        value={this.state.label} />
                <button 
                    className="btn btn-outline-secondary">
                    <span>Add item</span>
                </button>
            </form>
        )
    }

}