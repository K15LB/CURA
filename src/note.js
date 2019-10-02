import React, { Component } from 'react';
import moment from 'moment';

import After from './render/after';
import CustomerStatus from './render/customerStatus';
import NewCare from './render/newCare';

var now = moment(new Date());

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now: now,
            daycount: 0,
        }
    }


    render() {
        var today = now.format('YYYYMMDD');
        const weekDown = () => {
            this.setState({
                now: this.state.now.add(-7, 'days'),
                daycount: this.state.daycount + 7
            })
        }

        const dayDown = () => {
            this.setState({
                now: this.state.now.add(-1, 'days'),
                daycount: this.state.daycount + 1
            })
        }
        const backToday = () => {
            this.setState({ now: this.state.now.add(this.state.daycount, 'days') })
        }
        const dayUp = () => {

            this.setState({
                now: this.state.now.add(1, 'days'),
                daycount: this.state.daycount - 1
            })

        }
        const weekUp = () => {
            this.setState({
                now: this.state.now.add(7, 'days'),
                daycount: this.state.daycount - 7
            })
        }
        return (
            <div>
                <h1>Note</h1>
                <div>
                    <button onClick={(now) => { weekDown(now) }}>&laquo;&laquo;先週</button>
                    <button onClick={(now) => { dayDown(now) }}>&laquo;前日</button>
                    <button onClick={(now) => { backToday(now) }}>{now.format('YYYYMMDD')}</button>
                    <button onClick={(now) => { dayUp(now) }}>翌日&raquo;</button>
                    <button onClick={(now) => { weekUp(now) }}>翌週&raquo;&raquo;</button>
                </div>
                <div>明日以降のシフトに関連すること</div>
                <table border="1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>利用者名</th>
                            <th>連絡要否</th>
                            <th>誰から</th>
                            <th>変更種別</th>
                            <th>日付:From</th>
                            <th>日付:To</th>
                            <th>内容</th>
                            <th>入力者</th>
                            <th>入力日時</th>
                        </tr>
                    </thead>
                    <tbody>
                        <After today={today} />
                    </tbody>
                </table>
                <div>入退院について</div>
                <table border="1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>利用者名</th>
                            <th>連絡要否</th>
                            <th>誰から</th>
                            <th>変更種別</th>
                            <th>日付:From</th>
                            <th>日付:To</th>
                            <th>内容</th>
                            <th>入力者</th>
                            <th>入力日時</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CustomerStatus today={today} />
                    </tbody>
                </table>
                <div>新規の支援について</div>
                <table border="1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>利用者名</th>
                            <th>連絡要否</th>
                            <th>誰から</th>
                            <th>ステータス</th>
                            <th>日付:From</th>
                            <th>内容</th>
                            <th>入力者</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NewCare today={today} />
                    </tbody>
                </table>

            </div >
        );
    }
}
export default Note;
