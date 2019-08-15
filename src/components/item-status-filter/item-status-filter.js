import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {

    return (
        <div className="btn-group">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-outline-secondary">Active</button>
            <button className="btn btn-outline-secondary">Done</button>
        </div>

    )
}

export default ItemStatusFilter;