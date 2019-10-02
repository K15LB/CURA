import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag';
import { createPublicize } from '../graphql/mutations';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import DateTimePickerCustomInput from "./DateTimePickerCustomInput";
import { nearest15min } from "./utils";

var today = moment(new Date());

class Publicize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: 'ヘルパーへ要連絡',
            start: today.format('YYYYMMDD'),
            end: today.format('YYYYMMDD')
        }
    }
    render() {
        console.log(this.state)
        const handleSubmit = (e, createPublicize) => {
            e.preventDefault();
            createPublicize({
                variables: {
                    input: {
                        customername: this.customername.value,
                        username: Auth.user.username,
                        infoSource: this.infoSource.value,
                        start: this.state.start,
                        // starttime: this.starttime.value,
                        end: this.state.end,
                        // endtime: this.endtime.value,
                        contact: this.state.contact,
                        content: this.content.value,

                    }
                }
            });
            this.props.history.push('/timeline');
        }

        const handleDateChange = () => {
            this.setState({ start: "20190929 00:00" })
            console.log("this.state:", this.state)
        }
        return (
            <Mutation mutation={gql(createPublicize)}>
                {(createPublicize, { data, loading, error }) => {
                    return (
                        <div>
                            <div>
                                <form onSubmit={(e) => { handleSubmit(e, createPublicize) }}>
                                    <p>利用者名：<input type="text"
                                        ref={node => (this.customername = node)} /></p>
                                    <p>情報元:<input type="text"
                                        ref={node => (this.infoSource = node)} /></p>


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
                                    <p>備考：<textarea
                                        ref={node => (this.content = node)} /></p>


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

export default Publicize;