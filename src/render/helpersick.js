import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listHelperSicks } from '../graphql/queries';

class HelperSick extends Component {
    render() {
        const HelperSickDetail = (props) => {
            const helpersick = props.data.listHelperSicks.items;
            return helpersick.map((data) => {
                // if (data.create < data.createdAt || data.create === null) {
                if (this.props.today >= data.start && this.props.today <= data.end) {
                    return (
                        <tr key={data.id}>
                            <td><input type="checkbox" checked={data.checkstatus} /></td>
                            <td>{data.helpername}</td>
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
                            <td>{data.helpername}</td>
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
            <Query query={gql(listHelperSicks)}>
                {({ data, loading, error }) => {
                    if (error) return (<p>Error</p>);
                    if (loading || !listHelperSicks) return (<p>Loading...</p>);
                    return (
                        <HelperSickDetail data={data} />
                    )
                }}
            </Query>
        )
    }
}

export default HelperSick;


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


// export default After;