import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div>
                <h2>Search</h2>
                <input type="text" placeholder="Search here..." />
            </div>
        );
    }
}

export default SearchBox;