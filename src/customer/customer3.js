import React, { Component, useState, useEffect } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api'
import { listCustomers as ListCustomers } from "./graphql/customer/listcustomer";
import { deleteCustomer } from "./graphql/customer/deletecustomer";
import { UpdateCustomer } from "./graphql/customer/updateCustomer";




// const handleDelete = (deleteCustomer, id) => {
//     deleteCustomer({
//         variables: {
//             input: {
//                 id: id
//             }
//         },
//         optimisticResponse: () => ({
//             deleteCustomer: {
//                 // This type must match the return type of
//                 //the query below (listCustomers)
//                 __typename: 'ModelCustomerConnection',
//                 id: id,

//             }
//         }),
//         update: (store, { data: { deleteCustomer } }) => {
//             const data = store.readQuery({
//                 query: listCustomers,
//             });
//             data.listCustomers.items = data.listCustomers.items.filter(
//                 Customer => Customer.id !== deleteCustomer.id,
//             );

//             store.writeQuery({
//                 query: listCustomers,
//                 data,
//             });
//         },
//     })
// };

// const handleEdit = (updateCustomer, id, customerstatus) => {
//     updateCustomer({
//         variables: {
//             input: {
//                 id: id,
//                 // customerid: customerid,
//                 customerstatus: !customerstatus,
//             }
//         },
//     })
// };

function Customer(props) {
    const [customers, Customers] = useState([])
    useEffect(() => {
        listCustomers()
    }, [])

    console.log('props:', props)
    console.log('customers1:', customers);

    async function listCustomers() {
        const customers = await API.graphql(graphqlOperation(ListCustomers))
        console.log('customers:', customers);
        // updateCustomers(customers.data.listCustomers.items)
    }

    function handleClick() {
        props.history.push('./newcustomer')
    };

    function handleEdit(e, id) {
        console.log('update', id)
        // const customers = API.graphql(graphqlOperation(UpdateCustomer))
        // console.log('updateCustomer:', customers);

        // updateCustomer({
        //     variables: {
        //         input: {
        //             id: id,
        //             // customerid: customerid,
        //             customerstatus: !customerstatus,
        //         }
        //     },
        // })
    };

    return (
        <div>
            <h1>ここはCustomerです。</h1>
            <button onClick={() => { handleClick() }}>+</button>
            {
                // if (loading) return <p>Loading...</p>;
                // if (error) return <p>Error :</p>;

                customers.map(({ id, name, ruby, male, customerstatus }) => (
                    <div key={id}>
                        <input type="checkbox" />
                        {name}：{male}
                        <button onClick={(e) => { handleEdit(e, id) }}>編集</button>
                        {/* <button onClick={() => { handleDelete(deleteCustomer, id) }}>削除</button> */}
                    </div>
                )
                )
            }

        </div>

    );
}

export default Customer;