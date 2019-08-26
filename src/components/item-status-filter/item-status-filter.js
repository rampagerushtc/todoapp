import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    onFilterChange = (e) => {
        this.props.onFilterChange(e.target.textContent)
    }

    activeClassName = "btn btn-primary"
    secondaryClassName = "btn btn-outline-secondary"

    activateClassName = () => {

    }

    render() {
        const { activeFilter } = this.props
        //console.log(activeFilter)
        return (
            <div className="btn-group">
                <button
                    className={this.activeClassName}
                    onClick={this.onFilterChange}>All</button>
                <button
                    className={this.secondaryClassName}
                    onClick={this.onFilterChange}>Active</button>
                <button
                    className={this.secondaryClassName}
                    onClick={this.onFilterChange}>Done</button>
            </div>

        )
    }
}
