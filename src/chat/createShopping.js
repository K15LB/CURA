import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag';
import { createShopping } from '../graphql/mutations';
import moment from 'moment';

var today = moment(new Date());

class Shopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: 'ヘルパーへ要連絡',
            start: today.format('YYYYMMDD'),

        }
    }

    render() {
        console.log(this.props)
        const handleSubmit = (e, createShopping) => {
            e.preventDefault();
            createShopping({
                variables: {
                    input: {
                        customername: this.customername.value,
                        username: Auth.user.username,
                        infoSource: this.infoSource.value,
                        shopname: this.shopname.value,
                        start: this.start.value,
                        // starttime: this.starttime.value,
                        end: this.start.value,
                        // endtime: this.endtime.value,
                        content: this.content.value,

                    }
                }
            });
            this.props.history.push('/timeline');
        }
        return (
            <Mutation mutation={gql(createShopping)}>
                {(createShopping, { data, loading, error }) => {
                    return (
                        <div>
                            <div>

                                <form onSubmit={(e) => { handleSubmit(e, createShopping) }}>
                                    <p>利用者名：<input type="text"
                                        ref={node => (this.customername = node)} /></p>
                                    <p>情報元:<input type="text"
                                        ref={node => (this.infoSource = node)} /></p>
                                    <p>店名:<input type="text"
                                        ref={node => (this.shopname = node)} /></p>
                                    <p>何日：<input type="text"
                                        ref={node => (this.start = node)} /></p>

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

export default Shopping;