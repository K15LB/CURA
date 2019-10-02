import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag';
import { createHelperSick } from '../graphql/mutations';

class CreateHelperSick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
        }
    }
    render() {
        console.log(this.props)
        const handleSubmit = (e, createHelperSick) => {
            e.preventDefault();
            createHelperSick({
                variables: {
                    input: {
                        helpername: this.helpername.value,
                        username: Auth.user.username,
                        infoSource: this.infoSource.value,
                        status: this.state.status,
                        // status: this.status.value,
                        start: this.start.value,
                        // starttime: this.starttime.value,
                        end: this.end.value,
                        // endtime: this.endtime.value,
                        content: this.content.value,

                    }
                }
            });
            this.props.history.push('/timeline');
        }
        const handleStatus1 = () => {
            this.setState({ status: "病気" })
        }
        const handleStatus2 = () => {
            this.setState({ status: "ケガ" })
        }
        const handleStatus3 = () => {
            this.setState({ status: "その他" })
        }
        return (
            <Mutation mutation={gql(createHelperSick)}>
                {(createHelperSick, { data, loading, error }) => {
                    return (
                        <div>
                            <div>

                                <form onSubmit={(e) => { handleSubmit(e, createHelperSick) }}>
                                    <p>ヘルパー名：<input type="text"
                                        ref={node => (this.helpername = node)} /></p>
                                    <p>情報元:<input type="text"
                                        ref={node => (this.infoSource = node)} /></p>
                                    <p><input type="radio" name="status" onClick={() => { handleStatus1() }} />病気
                                        <input type="radio" name="status" onClick={() => { handleStatus2() }} />ケガ
                                        <input type="radio" name="status" onClick={() => { handleStatus3() }} />その他</p>
                                    <p>何日から：<input type="text"
                                        ref={node => (this.start = node)} /></p>
                                    <p>何日まで：<input type="text"
                                        ref={node => (this.end = node)} /></p>
                                    <p>備考：<textarea
                                        ref={node => (this.content = node)} /></p>
                                    <button onClick={() => { this.props.history.push('/timeline') }}>キャンセル</button>
                                    <button onClick={() => { this.props.history.push('/timeline/chatselect') }}>戻る</button>
                                    <button>{loading ? "Yes boss..." : "Create Post"}</button>
                                </form>
                                {error && <p>{error.message}</p>}
                            </div>
                        </div>
                    )
                }}
            </Mutation>

        );
    }
}

export default CreateHelperSick;