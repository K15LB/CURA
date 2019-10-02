import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag';
import { createContact } from '../graphql/mutations';
import moment from 'moment';

var today = moment(new Date());

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: '要連絡',
            start: today.format('YYYYMMDD'),
            end: today.format('YYYYMMDD'),
        }
    }
    render() {
        console.log(this.props)
        const handleSubmit = (e, createContact) => {
            e.preventDefault();
            createContact({
                variables: {
                    input: {
                        // customername: this.customername.value,
                        username: Auth.user.username,
                        infoSource: this.infoSource.value,
                        toWhom: this.toWhom.value,
                        contactPhoneNumber: this.contactPhoneNumber.value,
                        start: this.state.start,
                        // starttime: this.starttime.value,
                        end: this.state.end,
                        // endtime: this.endtime.value,
                        contact: this.state.contact,
                        content: this.content.value,
                        contactUs: false,
                    }
                }
            });
            this.props.history.push('/timeline');
        }
        return (
            <Mutation mutation={gql(createContact)}>
                {(createContact, { data, loading, error }) => {
                    return (
                        <div>
                            <div>

                                <form onSubmit={(e) => { handleSubmit(e, createContact) }}>
                                    {/* <p>利用者名：<input type="text" */}
                                    {/* ref={node => (this.customername = node)} /></p> */}
                                    <p>誰宛？:<input type="text"
                                        ref={node => (this.toWhom = node)} /></p>
                                    <p>誰から？:<input type="text"
                                        ref={node => (this.infoSource = node)} /></p>

                                    <p>連絡先：<input type="text"
                                        ref={node => (this.contactPhoneNumber = node)} /></p>
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

export default Contact;