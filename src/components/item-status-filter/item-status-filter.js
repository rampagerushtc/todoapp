import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    
    statusArray = ['All', 'Active', 'Done'];
    activeClassName = "btn btn-primary";
    secondaryClassName = "btn btn-outline-secondary";

    onFilterChange = (e) => {
        this.props.onFilterChange(e.target.textContent)
    }

    render() {
        const { activeFilter } = this.props;
        let id = 0;
        const  elements  = this.statusArray.map((e)=>{
            ++id;
            if (e === activeFilter) {
                return (<button
                    className={this.activeClassName}
                    onClick={this.onFilterChange}
                    key={id}>{e}
                </button>)
            } else {
                return (<button
                    className={this.secondaryClassName}
                    onClick={this.onFilterChange}
                    key={id}>{e}
                </button>)
            }
            
        });
        return (
            <div className="btn-group">
                {elements}
            </div>

        )
    }
}
