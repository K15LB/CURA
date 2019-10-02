import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listNewCares } from '../graphql/queries';

class NewCare extends Component {
    render() {
        const NewCareDetail = (props) => {
            const newcare = props.data.listNewCares.items;
            return newcare.map((data) => {
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
                            <td>{data.content}</td>
                            <td>{data.username}</td>
                        </tr>
                    );
                }
                // }
            })

        }

        return (
            <Query query={gql(listNewCares)}>
                {({ data, loading, error }) => {
                    if (error) return (<p>Error</p>);
                    if (loading || !listNewCares) return (<p>Loading...</p>);
                    console.log(data.listNewCares)
                    return (
                        <NewCareDetail data={data} />
                    )
                }}
            </Query>
        )
    }
}

export default NewCare;


// import React, { Component } from 'react';

// class NewCares extends Component {
//     render() {
//         const NewCares = this.props.data.listNewCares.items;
//         console.log(NewCares);

//         return NewCares.map((data) => {
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


// export default NewCares;