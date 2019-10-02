import React, { Component } from 'react';
import createCustomer from './graphql/customer/createcustomer';

class NewCustomer extends Component {
    handleClose() {
        this.props.history.push('./customer');
    }

    handleSubmit = (e, createCustomer) => {
        e.preventDefault();
        createChat({
            variables: {
                input: {
                    firstname: this.firstname.value,
                    lastname: this.lastname.value,
                    customerstatus: this.customerstatus.value,
                }
            }
        }).then(res => {
            this.firstname.value = "";
            this.lastname.value = "";
        });
    };

    render() {
        return (
            <div >
                <h1>ここはNewCustomerです。</h1>
                <form onClick={() => { this.handleSubmit() }}>
                    <input type="text" />
                    <input type="text" ref={node => (this.firstname = node)} />
                    <input type="text" ref={node => (this.lastname = node)} />
                    <input type="text" ref={node => (this.customerstatus = node)} />
                    <input type="radio" />
                    <input type="submit" name="" id="" />
                </form>
                <button onClick={() => { this.handleClose() }}>閉じる</button>
            </div>
        );
    }
}
export default NewCustomer;
