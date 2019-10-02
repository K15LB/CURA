import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listPublicizes } from '../graphql/queries';

class Publicize extends Component {
    render() {
        const PublicizeDetail = (props) => {
            const publicize = props.data.listPublicizes.items;
            return publicize.map((data) => {
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
            <Query query={gql(listPublicizes)}>
                {({ data, loading, error }) => {
                    if (error) return (<p>Error</p>);
                    if (loading || !listPublicizes) return (<p>Loading...</p>);
                    return (
                        <PublicizeDetail data={data} />
                    )
                }}
            </Query>
        )
    }
}

export default Publicize;


// import React, { Component } from 'react';

// class Publicize extends Component {
//     render() {
//         const Publicize = this.props.data.listPublicizes.items;
//         console.log(Publicize);

//         return Publicize.map((data) => {
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


// export default Publicize;