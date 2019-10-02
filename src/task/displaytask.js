import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Modal from 'react-modal';
import { listTasks } from '../graphql/queries';
import { onCreateTask } from '../graphql/subscriptions'
import Task from './task'

Modal.setAppElement('#root')

class DisplayTask extends Component {

    subsCribeNewTasks = (subscribeToMore) => {
        return subscribeToMore({
            document: gql(onCreateTask),
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newTaskData = subscriptionData.data.onCreateTask;
                return Object.assign({}, prev, {
                    listTasks: {
                        ...prev.listTasks,
                        items: [...prev.listTasks.items, newTaskData]
                    }
                })
            }
        })
    }



    render() {
        return (
            <div>
                <h1>Task</h1>
                <button onClick={() => { this.props.history.push("/task/createtask") }}>+</button>

                <Query query={gql(listTasks)}>
                    {({ data, loading, error, subscribeToMore }) => {

                        if (error) return (<p>Error</p>);
                        if (loading || !listTasks) return (<p>Loading...</p>);
                        return (
                            <>
                                <p>renderTask</p>
                                <Task data={data} subscribeToMore={() =>
                                    this.subsCribeNewTasks(subscribeToMore)} />
                            </>
                        )

                    }}
                </Query>
            </div>
        );
    }
}
export default DisplayTask;