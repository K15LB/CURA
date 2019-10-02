import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { createCustomer } from '../graphql/mutations';
import moment from 'moment';
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag'

var now = moment(new Date());
const today = now.format('YYYY');
const birthday = 1983;
const age = today - birthday;

class NewCustomer extends Component {
    state = {
        male: '',
        year: '',
        manth: '',
        day: '',
        prefecture: '鹿児島県',
        city: '鹿児島市',
        town: '',
        numer: '',
        today: today,
        age: age,
    }


    handleClose() {
        this.props.history.push('/customer');
    }

    handleMaleChange(e) {
        const inputValue = e.target.value;
        this.setState({ male: inputValue });
    }

    handleSubmit(e, createCustomer) {
        e.preventDefault();
        createCustomer({
            variables: {
                input: {
                    customerid: uuidV4(),
                    firstname: this.firstname.value,
                    lastname: this.lastname.value,
                    firstruby: this.firstruby.value,
                    lastruby: this.lastruby.value,
                    male: this.state.male,
                    birthday: this.state.year + this.state.month + this.state.day,
                    adress: this.state.prefecture + this.state.city + this.state.town + this.state.number,
                    phoneNumber: this.phoneNumber.value,
                    mobilePhoneNumber: this.mobilePhoneNumber.value,
                    email: this.email.value,
                    emergencyfamily: this.emergencyfamily.value,
                    emergencycontact: this.emergencycontact.value,
                    customerstatus: true,
                }
            }
        });
        this.props.history.push('/customer');
    };

    render() {
        // console.log(today);
        // console.log(this.state.age);
        return (
            <Mutation mutation={gql(createCustomer)} >
                {(createCustomer, { data, loading, error }) => (
                    <div>
                        <form onSubmit={e => this.handleSubmit(e, createCustomer)}>
                            <div>
                                <label>苗字</label>
                                <input type="text" placeholder="First Name" ref={node => (this.firstname = node)}
                                    onChange={(e) => { this.setState({ firstname: e.target.value }) }} />
                                <label>名前</label>
                                <input type="text" placeholder="Last Name" ref={node => (this.lastname = node)}
                                    onChange={(e) => { this.setState({ lastname: e.target.value }) }} />
                                <br />
                            </div>
                            <div>
                                <label>みょうじ</label>
                                <input type="text" placeholder="first Ruby" ref={node => (this.firstruby = node)}
                                    onChange={(e) => { this.setState({ firstruby: e.target.value }) }} />
                                <label>なまえ</label>
                                <input type="text" placeholder="Last Ruby" ref={node => (this.lastruby = node)}
                                    onChange={(e) => { this.setState({ lastruby: e.target.value }) }} />
                                <br />
                            </div>
                            <div>
                                <label>性別</label>
                                <input type="radio" value="男性" ref={node => (this.male = node)}
                                    onChange={(e) => { this.handleMaleChange(e) }} />男性
                                <input type="radio" name="male" value="女性" ref={node => (this.male = node)}
                                    onChange={(e) => { this.handleMaleChange(e) }} />女性
                                <br />
                            </div>
                            <div>
                                <label>誕生日</label>
                                <input type="text" name="year" value={this.state.year} ref={node => (this.birthday = node)}
                                    onChange={(e) => { this.setState({ year: e.target.value }) }} />
                                <input type="text" name="month" value={this.state.month} ref={node => (this.birthday = node)}
                                    onChange={(e) => { this.setState({ month: e.target.value }) }} />
                                <input type="text" name="day" value={this.state.day} ref={node => (this.birthday = node)}
                                    onChange={(e) => { this.setState({ day: e.target.value }) }} />
                                <br />
                            </div>
                            <div>
                                <label>住所</label>
                                <input type="text" name="prefecture" value={this.state.prefecture} ref={node => (this.adress = node)}
                                    onChange={(e) => { this.setState({ prefecture: e.target.value }) }} />
                                <input type="text" name="city" ref={node => (this.adress = node)} value={this.state.city}
                                    onChange={(e) => { this.setState({ city: e.target.value }) }} />
                                <input type="text" name="town" ref={node => (this.adress = node)}
                                    onChange={(e) => { this.setState({ town: e.target.value }) }} />
                                <input type="text" name="number" ref={node => (this.adress = node)}
                                    onChange={(e) => { this.setState({ number: e.target.value }) }} />
                                <br />
                            </div>
                            <div>
                                <label>電話番号</label>
                                <input type="text" name="phoneNumber" ref={node => (this.phoneNumber = node)} />
                                <br />
                            </div>
                            <div>
                                <label>携帯電話</label>
                                <input type="text" name="mobilePhoneNumber" ref={node => (this.mobilePhoneNumber = node)} />
                                <br />
                            </div>
                            <div>
                                <label>メールアドレス</label>
                                <input type="text" name="email" ref={node => (this.email = node)} />
                                <br />
                            </div>
                            <div>
                                <label>緊急連絡先：氏名</label>
                                <input type="text" name="emergencyfamily" ref={node => (this.emergencyfamily = node)} />
                                <br />
                            </div>
                            <div>
                                <label>緊急連絡：電話番号</label>
                                <input type="text" name="emergencycontact" ref={node => (this.emergencycontact = node)} />
                                <br />
                            </div>

                            <br />
                            <button type="submit">登録</button>
                            <button onClick={() => this.handleClose()}>閉じる</button>
                        </form>

                    </div>
                )}
            </Mutation >
        );
    }
}
export default NewCustomer;
