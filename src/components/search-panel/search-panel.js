import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    onTypeSearch = (e) => {
        this.props.onTypeSearch(e.target.value);
    }

    render() {
        const searchText = 'Type here to search';
        const searchStyle = {
            fontSize: '20px'
        }
        return (
            <input
                onChange={this.onTypeSearch}
                className="search-panel form-control"
                placeholder={searchText}
                style={searchStyle} />
        );

    }

}