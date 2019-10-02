import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listReports } from '../graphql/queries';

class Report extends Component {
    render() {
        const ReportDetail = (props) => {
            const report = props.data.listReports.items;
            console.log("report:", report)
            return report.map((data) => {
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
            <Query query={gql(listReports)}>
                {({ data, loading, error }) => {
                    if (error) return (<p>Error</p>);
                    if (loading || !listReports) return (<p>Loading...</p>);
                    return (
                        <ReportDetail data={data} />
                    )
                }}
            </Query>
        )
    }
}

export default Report;


// import React, { Component } from 'react';

// class Report extends Component {
//     render() {
//         const Report = this.props.data.listReports.items;
//         console.log(Report);

//         return Report.map((data) => {
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


// export default Report;