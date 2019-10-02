import React, { Component } from 'react';

class TimeLine extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>TimeLine</h1>
                <button onClick={() => { this.props.history.push('/timeline/chatselect') }}>+</button>
            </div>
        );
    }
}

export default TimeLine;