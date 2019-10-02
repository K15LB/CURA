import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { listCustomers } from "../graphql/queries";
import { updateCustomer, deleteCustomer } from "../graphql/mutations";
import gql from 'graphql-tag'

class Customer extends Component {

    render() {
        const handleClick = () => {
            this.props.history.push('/customer/newcustomer')
        }

        const handleEdit = (updateCustomer, customer) => {
            console.log('clicked');
            updateCustomer({
                variables: {
                    input: {
                        id: customer.id,
                        // customerid: customerid,
                        customerstatus: !customer.customerstatus,
                    }
                },
            })
        };

        const handleStatus = (e, updateCustomer, customer) => {
            console.log('clicked')
            updateCustomer({
                variables: {
                    input: {
                        id: customer.id,
                        // customerid: customerid,
                        customerstatus: !customer.customerstatus,
                    }
                },
            })
        }
        const handleDelete = (deleteCustomer, customer) => {
            deleteCustomer({
                variables: {
                    input: {
                        id: customer.id
                    }
                },
                optimisticResponse: () => ({
                    deleteCustomer: {
                        // This type must match the return type of
                        //the query below (listCustomers)
                        __typename: 'ModelCustomerConnection',
                        id: customer.id,
                    }
                }),
                update: (store, { data: { deleteCustomer } }) => {
                    const data = store.readQuery({
                        query: listCustomers,
                    });
                    data.listCustomers.items = data.listCustomers.items.filter(
                        Customer => Customer.id !== deleteCustomer.id,
                    );

                    store.writeQuery({
                        query: listCustomers,
                        data,
                    });
                },
            })
        };


        return (
            <div>
                <h1>ここはCustomerです。</h1>
                <button onClick={() => { handleClick() }}>+</button>
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th></th>
                                <th>名前</th>
                                <th>読み仮名</th>
                                <th>性別</th>
                                <th>編集</th>
                                <th>削除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Query query={gql(listCustomers)}>
                                {({ data, loading, error }) => {

                                    if (error) return (<p>Error</p>);
                                    if (loading || !listCustomers) return (<p>Loading...</p>);
                                    return (
                                        <Mutation mutation={gql(updateCustomer)}>
                                            {(updateCustomer) => {
                                                return (
                                                    <Mutation mutation={gql(deleteCustomer)}>
                                                        {(deleteCustomer) => {
                                                            console.log(data.listCustomers);

                                                            return (
                                                                data.listCustomers.items.map((customer) => (

                                                                    <tr key={customer.id}>
                                                                        <td><input type="checkbox" checked={!customer.customerstatus} onChange={(e) => { handleStatus(e, updateCustomer, customer) }} /></td>
                                                                        <td>{customer.firstname}{customer.lastname}</td>
                                                                        <td>{customer.firstruby}{customer.lastruby}</td>
                                                                        <td>{customer.male}</td>
                                                                        <td><button onClick={(e) => { handleEdit(e, updateCustomer, customer) }}>編集</button></td>
                                                                        <td><button onClick={() => { handleDelete(deleteCustomer, customer) }}>削除</button></td>

                                                                    </tr>
                                                                ))
                                                            )
                                                        }}
                                                    </Mutation>
                                                )
                                            }}
                                        </Mutation>
                                    )
                                }}
                            </Query>
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}
export default Customer;


    // function handleEdit(e, id) {
    //     console.log('update', id)
    //     // const customers = API.graphql(graphqlOperation(UpdateCustomer))
    //     // console.log('updateCustomer:', customers);

    //     // updateCustomer({
    //     //     variables: {
    //     //         input: {
    //     //             id: id,
    //     //             // customerid: customerid,
    //     //             customerstatus: !customerstatus,
    //     //         }
    //     //     },
    //     // })
    // };

