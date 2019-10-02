import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listAfters } from '../graphql/queries';

class After extends Component {
    render() {
        const AfterDetail = (props) => {
            const after = props.data.listAfters.items;
            return after.map((data) => {
                // if (data.create < data.createdAt || data.create === null) {
                if (this.props.today >= data.start && this.props.today <= data.end) {
                    return (
                        <tr key={data.id}>
                            <td><input type="checkbox" checked={data.checkstatus} /></td>
                            <td>{data.customername}</td>
                            <td>{data.contact}</td>
                            <td>{data.infoSource}</td>
                            <td>{data.status}</td>
                            <td>{data.start}</td>
                            <td>{data.end}</td>
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
                            <td>{data.status}</td>
                            <td>{data.start}</td>
                            <td>{data.end}</td>
                            <td>{data.content}</td>
                            <td>{data.username}</td>
                        </tr>
                    );
                }
                // }
            })

        }

        return (
            <Query query={gql(listAfters)}>
                {({ data, loading, error }) => {
                    if (error) return (<p>Error</p>);
                    if (loading || !listAfters) return (<p>Loading...</p>);
                    console.log(data.listAfters)
                    return (
                        <AfterDetail data={data} />
                    )
                }}
            </Query>
        )
    }
}

export default After;


// import React, { Component } from 'react';

// class After extends Component {
//     render() {
//         const after = this.props.data.listAfters.items;
//         console.log(after);

//         return after.map((data) => {
//             // if (data.create < data.createdAt || data.create === null) {
//             //     if (this.props.today >= data.start && this.props.today <= data.end) {
//             return (
//                 <tr key={data.id}>
//                     <td><input type="checkbox" checked={data.checkstatus} /></td>
//                     <td>{data.customername}</td>
//                     <td>{data.status}</td>
//                     <td>{data.start}</td>
//                     <td>{data.end}</td>
//                     <td>{data.content}</td>
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
//             //             <td>{data.content}</td>
//             //         </tr>
//             //     );
//         })
//     }

// }



// //         )
// //     }
// // }


// export default After;