import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import { updateTask, deleteTask } from '../graphql/mutations';
import TaskEdit from './edittask';

class Task extends Component {
    componentWillMount() {
        this.props.subscribeToMore();
    }

    render() {
        const handleChange = (e, updateTask, task) => {
            e.preventDefault();
            updateTask({
                variables: {
                    input: {
                        id: task.id,
                        taskStatus: !task.taskStatus,
                    }
                }
            });
        };
        const handleDelete = (deleteTask, task) => {
            deleteTask({
                variables: {
                    input: {
                        id: task.id
                    }
                },
                // optimisticResponse: () => ({
                //     deleteTask: {
                //         __typename: 'ModelTaskConnection',
                //         id: this.props.id,
                //         tasktitle: this.props.tasktitle,
                //         taskcontent: this.props.taskcontent,
                //         createdAt: this.props.taskcreatedAt,
                //         taskStatus: this.props.taskStatus,
                //         deadline: this.props.deadline,
                //     }
                // }),
                // update: (store, { data: { deleteTask } }) => {
                //     const query = gql(listTasks);
                //     const data = store.readQuery({ query });
                //     data.listTasks.items = [
                //         data.listTasks.items.filter(item =>
                //             item.id === this.props.id
                //         )
                //     ];
                //     store.writeQuery({
                //         query,
                //         data,
                //     })

                // }

            })
        }
        return (
            <Mutation mutation={gql(updateTask)}>
                {(updateTask) => {
                    return (
                        <Mutation mutation={gql(deleteTask)}>
                            {(deleteTask) => {
                                const createdAt = this.props.data.listTasks.items.createdAt;
                                const taskcreatedAt = moment(createdAt).format("YYYY/MM/DD HH:MM")
                                return (
                                    this.props.data.listTasks.items.map((task) => (
                                        <div key={task.id}>
                                            <p><input type="checkbox" checked={task.taskStatus} onChange={(e) => { handleChange(e, updateTask, task) }} />
                                                {task.tasktitle}:{taskcreatedAt} <button onClick={() => { handleDelete(deleteTask, task) }}>×</button></p>
                                            <p>{task.taskcontent}</p>
                                            <p>{task.deadline}</p>
                                            {/* <button onClick={this.openModal}>Edit</button> */}
                                            {/* <Modal
                                                                isOpen={this.state.modalIsOpen}
                                                                onAfterOpen={this.afterOpenModal}
                                                                onRequestClose={this.closeModal}
                                                                contentLabel="Example Modal"> */}
                                            <TaskEdit {...task} />
                                            {/* </Modal> */}
                                        </div>
                                    ))
                                )
                            }}
                        </Mutation>
                    )

                }}
            </Mutation>
        );
    }
}

export default Task;