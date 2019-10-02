import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { updateTask } from '../graphql/mutations';
import gql from 'graphql-tag';

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            taskData: {
                id: this.props.id,
                taskid: this.props.taskid,
                username: this.props.username,
                tasktitle: this.props.tasktitle,
                taskcontent: this.props.taskcontent,
                deadline: this.props.deadline,
            }
        }
    }
    handleModal = () => {
        this.setState({ show: !this.state.show });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    handleSubmit = (e, updateTask, task) => {
        e.preventDefault();
        updateTask({
            variables: {
                input: {
                    id: task.id,
                    taskid: task.taskid,
                    username: task.username,
                    tasktitle: task.tasktitle,
                    taskcontent: task.taskcontent,
                    deadline: task.deadline
                }
            }
        }).then(res => this.handleModal());
    };

    handleTitle = e => {
        this.setState({
            taskData: { ...this.state.taskData, tasktitle: e.target.value }
        })
    }

    handleContent = e => {
        this.setState({
            taskData: { ...this.state.taskData, taskcontent: e.target.value }
        })
    }

    handleDeadline = e => {
        this.setState({
            taskData: { ...this.state.taskData, deadline: e.target.value }
        })
    }


    render() {

        const task = this.state.taskData
        return (
            <>
                {
                    this.state.show && (
                        <div>
                            <p>This TaskEdit Page</p>
                            <Mutation mutation={gql(updateTask)}>
                                {(updateTask, { data, loading, error }) => {
                                    return (
                                        < form onSubmit={e => this.handleSubmit(e, updateTask, task)}>
                                            <p>user name:<input type="text" value={task.username} onChange={this.handleUser} /></p>
                                            <p>task title:<input type="text" value={task.tasktitle} onChange={this.handleTitle} /></p>
                                            <p>task content:<textarea value={task.taskcontent} onChange={this.handleContent}></textarea></p>
                                            <p>deadline:<input type="text" value={task.deadline} onChange={this.handleDeadline} /></p>
                                            <button >{loading ? "Saving" : "Save"}</button>
                                            <button className="close" onClick={this.handleModal}>Cansel</button>
                                        </form>

                                    )
                                }}
                            </Mutation>

                        </div>
                    )}
                <button onClick={this.handleModal}>Edit</button>
            </>

        );
    }
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             taskData: {
    //                 id: this.props.id,
    //                 taskid: this.props.taskid,
    //                 username: this.props.username,
    //                 tasktitle: this.props.tasktitle,
    //                 taskcontent: this.props.taskcontent,
    //                 deadline: this.props.deadline,
    //             }
    //         }
    //     }

    //     handleTitle = e => {
    //         console.log('titleBefore:', this.state.taskData.tasktitle)
    //         this.setState({
    //             taskData: { ...this.state.taskData, tasktitle: e.target.value }
    //         })
    //         console.log('titleAfter:', this.state.taskData.tasktitle)
    //     }

    //     handleContent = e => {
    //         this.setState({
    //             taskData: { ...this.state.taskData, taskcontent: e.target.value }
    //         })
    //     }

    //     handleDeadline = e => {
    //         this.setState({
    //             taskData: { ...this.state.taskData, deadline: e.target.value }
    //         })
    //     }



    //     render() {
    //         const handleChange = (e, updateTask, task) => {
    //             console.log(task)
    //             e.preventDefault();
    //             updateTask({
    //                 variables: {
    //                     input: {
    //                         id: task.id,
    //                         taskid: task.taskid,
    //                         username: task.username,
    //                         tasktitle: task.tasktitle,
    //                         taskcontent: task.taskcontent,
    //                         deadline: task.deadline
    //                     }
    //                 }
    //             })
    //         }
    //         const task = this.state.taskData;
    //         console.log('thisState:', task);
    //         return (
    //             <div>
    //                 <p>This TaskEdit Page</p>
    //                 <Mutation mutation={gql(updateTask)}>
    //                     {(updateTask, { data, loading, error }) => {
    //                         return (
    //                             <form >
    //                                 <p>user name:<input type="text" value={task.username} onChange={this.handleUser} /></p>
    //                                 <p>task title:<input type="text" value={task.tasktitle} onChange={this.handleTitle} /></p>
    //                                 <p>task content:<textarea value={task.taskcontent} onChange={this.handleContent}></textarea></p>
    //                                 <p>deadline:<input type="text" value={task.deadline} onChange={this.handleDeadline} /></p>
    //                                 <button onSubmit={(e) => { handleChange(e, updateTask, task) }}>{loading ? "Saving" : "Save"}</button>
    //                             </form>

    //                         )
    //                     }}
    //                 </Mutation>

    //             </div>
    //         );
    //     }
    // }
}
export default TaskEdit;