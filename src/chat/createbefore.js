import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag';
import { createBefore } from '../graphql/mutations';
import moment from 'moment';

var today = moment(new Date());

class Before extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            start: today.format('YYYYMMDD'),
            end: today.format('YYYYMMDD')
        }
    }

    render() {
        const handleSubmit = (e, createBefore) => {
            e.preventDefault();
            createBefore({
                variables: {
                    input: {
                        customername: this.customername.value,
                        username: Auth.user.username,
                        infoSource: this.infoSource.value,
                        status: this.status.value,
                        start: this.state.start,
                        // starttime: this.starttime.value,
                        end: this.state.end,
                        // endtime: this.endtime.value,
                        content: this.content.value,

                    }
                }
            });
            this.props.history.push('/timeline');
        }
        const handleStatus1 = () => {
            this.setState({ status: "追加" })
        }
        const handleStatus2 = () => {
            this.setState({ status: "振替" })
        }
        const handleStatus3 = () => {
            this.setState({ status: "キャンセル" })
        }
        return (
            <Mutation mutation={gql(createBefore)}>
                {(createBefore, { data, loading, error }) => {
                    return (
                        <div>
                            <div>

                                <form onSubmit={(e) => { handleSubmit(e, createBefore) }}>
                                    <p>利用者名：<input type="text"
                                        ref={node => (this.customername = node)} /></p>
                                    <p>情報元:<input type="text"
                                        ref={node => (this.infoSource = node)} /></p>
                                    <p><input type="radio" name="status" onClick={() => { handleStatus1() }} />追加
                                        <input type="radio" name="status" onClick={() => { handleStatus2() }} />振替
                                        <input type="radio" name="status" onClick={() => { handleStatus3() }} />キャンセル</p>

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


export default Before;