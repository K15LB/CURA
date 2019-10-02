import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { createHelper } from '../graphql/mutations';
import moment from 'moment';
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag'

var now = moment(new Date());
const today = now.format('YYYY');
const birthday = 1983;
const age = today - birthday;

class createHelper extends Component {
    state = {
        male: '',
        firstname: '',
        lastname: '',
        firstruby: '',
        lastruby: '',
    }


    handleClose() {
        this.props.history.push('/helper');
    }

    handleMaleChange(e) {
        const inputValue = e.target.value;
        this.setState({ male: inputValue });
    }

    handleSubmit(e, createHelper) {
        e.preventDefault();
        createHelper({
            variables: {
                input: {
                    customerid: uuidV4(),
                    name: this.state.firstname + this.state.lastname,
                    ruby: this.state.firstruby + this.state.lastruby,
                    male: this.state.male,
                    // birthday:this.state.birthday,
                    phone: this.phone.value,
                    helperStatus: true,
                }
            }
        });
        this.props.history.push('/helper');
    };

    render() {
        // console.log(today);
        // console.log(this.state.age);
        return (
            <Mutation mutation={gql(createHelper)} >
                {(createHelper, { data, loading, error }) => (
                    <div>
                        <form onSubmit={e => this.handleSubmit(e, createHelper)}>
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
                                <input type="text" placeholder="first Ruby" ref={node => (this.lastname = node)}
                                    onChange={(e) => { this.setState({ firstruby: e.target.value }) }} />
                                <label>なまえ</label>
                                <input type="text" placeholder="Last Ruby" ref={node => (this.lastname = node)}
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
                                <label>携帯電話</label>
                                <input type="text" name="mobilePhoneNumber" ref={node => (this.mobilePhoneNumber = node)} />
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
export default createHelper;

