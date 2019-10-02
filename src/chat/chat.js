import React, { Component } from 'react';
import CreateChat from "./createchat";
import RenderChat from "./renderchat";

class Chat extends Component {

    render() {

        return (
            <div>
                <h1>Chat</h1>
                <CreateChat props={this.props} />
                <RenderChat props={this.props} />

            </div>
        );
    }
}

export default Chat;

