import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {

    return (
        <div className="btn-group">
            <button className="btn">All</button>
            <button className="btn">Active</button>
            <button className="btn">Done</button>
        </div>

    )
}

export default ItemStatusFilter;