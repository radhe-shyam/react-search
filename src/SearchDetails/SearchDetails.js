import React, { Component } from 'react';

class SearchDetails extends Component {
    render() {
        return (
            <div>
                <h2>Search Result: {this.props.data.keyword}</h2>
                <p>{this.props.data.result || 'No search'}</p>
            </div>
        );
    }
}

export default SearchDetails;