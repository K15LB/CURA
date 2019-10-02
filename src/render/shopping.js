import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listShoppings } from '../graphql/queries';

class Shopping extends Component {
    render() {
        const ShoppingDetail = (props) => {
            const shopping = props.data.listShoppings.items;
            return shopping.map((data) => {
                // if (data.create < data.createdAt || data.create === null) {
                if (this.props.today >= data.start && this.props.today <= data.end) {
                    return (
                        <tr key={data.id}>
                            <td><input type="checkbox" checked={data.checkstatus} /></td>
                            <td>{data.customername}</td>
                            <td>{data.contact}</td>
                            <td>{data.infoSource}</td>
                            <td>{data.start}</td>
                            <td>{data.content}</td>
                            <td>{data.username}</td>

                        </tr>
                    );
                } else if (this.props.today === null && this.props.today <= data.end) {
                    return (
                        <tr key={data.id}>
                            <td><input type="checkbox" checked={data.checkstatus} /></td>
                            <td>{data.customername}</td>
                            <td>{data.contact}</td>
                            <td>{data.infoSource}</td>
                            <td>{data.start}</td>
                            <td>{data.content}</td>
                            <td>{data.username}</td>
                        </tr>
                    );
                }
                // }
            })

        }

        return (
            <Query query={gql(listShoppings)}>
                {({ data, loading, error }) => {
                    if (error) return (<p>Error</p>);
                    if (loading || !listShoppings) return (<p>Loading...</p>);
                    return (
                        <ShoppingDetail data={data} />
                    )
                }}
            </Query>
        )
    }
}

export default Shopping;


// import React, { Component } from 'react';

// class Shopping extends Component {
//     render() {
//         const Shopping = this.props.data.listShoppings.items;
//         console.log(Shopping);

//         return Shopping.map((data) => {
//             // if (data.create < data.createdAt || data.create === null) {
//             //     if (this.props.today >= data.start && this.props.today <= data.end) {
//             return (
//                 <tr key={data.id}>
//                     <td><input type="checkbox" checked={data.checkstatus} /></td>
//                     <td>{data.helpername}</td>
//                     <td>{data.status}</td>
//                     <td>{data.start}</td>
//                     <td>{data.end}</td>
//                     <td>{data.memo}</td>
//                 </tr>
//             );
//             // } else if (this.props.today === null && this.props.today <= data.end) {
//             //     return (
//             //         <tr key={data.id}>
//             //             <td><input type="checkbox" checked={data.checkstatus} /></td>
//             //             <td>{data.name}</td>
//             //             <td>{data.status}</td>
//             //             <td>{data.start}</td>
//             //             <td>{data.end}</td>
//             //             <td>{data.memo}</td>
//             //         </tr>
//             //     );
//         })
//     }

// }



// //         )
// //     }
// // }


// export default Shopping;