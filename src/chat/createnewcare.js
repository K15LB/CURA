import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag';
import { createNewCare } from '../graphql/mutations';

import moment from 'moment';

class NewCare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '新規',
            contact: '',
        }
    }
    render() {
        const handleSubmit = (e, createNewCare) => {
            e.preventDefault();
            createNewCare({
                variables: {
                    input: {
                        customername: this.customername.value,
                        username: Auth.user.username,
                        infoSource: this.infoSource.value,
                        status: this.state.status,
                        start: this.start.value,
                        // starttime: this.starttime.value,
                        end: moment(this.start.value).add(14, 'd').format('YYYYMMDD'),
                        // endtime: this.endtime.value,
                        contact: this.state.contact,
                        content: this.content.value,

                    }
                }
            });
            this.props.history.push('/timeline');
        }
        const handleContact1 = () => {
            this.setState({ contact: "要連絡" })
        }
        const handleContact2 = () => {
            this.setState({ contact: "連絡不要" })
        }
        return (
            <Mutation mutation={gql(createNewCare)}>
                {(createNewCare, { data, loading, error }) => {
                    return (
                        <div>
                            <div>
                                <form onSubmit={(e) => { handleSubmit(e, createNewCare) }}>
                                    <p>利用者名：<input type="text"
                                        ref={node => (this.customername = node)} /></p>
                                    <p>情報元:<input type="text"
                                        ref={node => (this.infoSource = node)} /></p>
                                    <p>何日から<input type="text"
                                        ref={node => (this.start = node)} /></p>

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

export default NewCare;