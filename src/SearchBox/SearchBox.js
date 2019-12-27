
import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword: '' };
    }
    submit(event) {
        if (this.state.keyword) {
            this.props.addSearch({
                keyword: this.state.keyword,
                result: "I know I can tell u anything",
            });
            this.setState({ keyword: '' });
        }
        event.preventDefault();
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.selected : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h2>Search</h2>
                <form onSubmit={this.submit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.keyword} name="keyword" placeholder="Search here..." />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default SearchBox;