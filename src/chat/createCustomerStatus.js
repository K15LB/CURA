import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag';
import { createCustomerStatus } from '../graphql/mutations';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import DateTimePickerCustomInput from "./DateTimePickerCustomInput";
import { nearest15min } from "./utils";

class CustomerStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            contact: '',
            start: nearest15min().format(),
        }
    }
    render() {
        const handleSubmit = (e, createCustomerStatus) => {
            e.preventDefault();
            createCustomerStatus({
                variables: {
                    input: {
                        customername: this.customername.value,
                        username: Auth.user.username,
                        infoSource: this.infoSource.value,
                        status: this.state.status,
                        start: this.start.value,
                        // starttime: this.starttime.value,
                        end: this.end.value,
                        // endtime: this.endtime.value,
                        hospitalname: this.hospitalname.value,
                        contact: this.state.contact,
                        content: this.content.value,

                    }
                }
            });
            this.props.history.push('/timeline');
        }
        const handleStatus1 = () => {
            this.setState({ status: "入院" })
        }
        const handleStatus2 = () => {
            this.setState({ status: "退院" })
        }
        const handleContact1 = () => {
            this.setState({ contact: "要連絡" })
        }
        const handleContact2 = () => {
            this.setState({ contact: "連絡不要" })
        }
        const handleDateChange = () => {
            this.setState({ start: "20190929 00:00" })
            console.log("this.state:", this.state)
        }
        return (
            <Mutation mutation={gql(createCustomerStatus)}>
                {(createCustomerStatus, { data, loading, error }) => {
                    return (
                        <div>
                            <div>
                                <form onSubmit={(e) => { handleSubmit(e, createCustomerStatus) }}>
                                    <p>利用者名：<input type="text"
                                        ref={node => (this.customername = node)} /></p>
                                    <p>情報元:<input type="text"
                                        ref={node => (this.infoSource = node)} /></p>
                                    <p><input type="radio" name="status" onClick={() => { handleStatus1() }} />入院
                                        <input type="radio" name="status" onClick={() => { handleStatus2() }} />退院</p>
                                    <p>何日：<input type="text"
                                        ref={node => (this.start = node)} /></p>
                                    <p>何日：<input type="text"
                                        ref={node => (this.end = node)} /></p>
                                    {/* <DatePicker
                                        className="ui container"
                                        customInput={<DateTimePickerCustomInput />}
                                        id="when"
                                        selected={moment(th).format()}
                                        onChange={() => { handleDateChange() }}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        showTimeSelect
                                        timeFormat="hh:mm a"
                                        timeIntervals={15}
                                        dateFormat="LL LT"
                                    /> */}
                                    <p>病院名:<input type="text"
                                        ref={node => (this.hospitalname = node)} /></p>
                                    <p>備考：<textarea
                                        ref={node => (this.content = node)} /></p>
                                    <p><input type="radio" name="contact" onClick={() => { handleContact1() }} />要連絡
                                        <input type="radio" name="contact" onClick={() => { handleContact2() }} />連絡不要</p>

                                    <button onClick={() => { this.props.history.push('/timeline') }}>キャンセル</button>
                                    <button onClick={() => { this.props.history.push('/timeline/chatselect') }}>戻る</button>
                                    <button>{loading ? "送信中" : "送信"}</button>
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

export default CustomerStatus;