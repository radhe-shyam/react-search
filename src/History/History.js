import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <div>
                <h2>Search History:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Keyword</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.length > 0 ? (
                            this.props.list.map((d, i) => (
                                <tr onClick={this.props.selectSearch.bind(this, d)} style={this.props.selected.keyword === d.keyword ? { color: 'red' } : {}} key={i}>
                                    <td>{d.keyword}</td>
                                </tr>
                            ))
                        ) : (
                                <tr>
                                    <td colspan="2">No search history</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default History;