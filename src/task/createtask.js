import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import uuidV4 from 'uuid';
import { createTask } from '../graphql/mutations'



class CreateTask extends Component {
    render() {
        const handleSubmit = (e, createTask) => {
            e.preventDefault();
            createTask({
                variables: {
                    input: {
                        taskid: uuidV4(),
                        username: Auth.user.username,
                        tasktitle: this.tasktitle.value,
                        taskcontent: this.taskcontent.value,
                        deadline: this.deadline.value,
                        taskStatus: false,
                    }
                }
            })
        }

        return (
            <div>
                <p>CreateTask Page</p>
                <Mutation mutation={gql(createTask)}>
                    {(createTask, { data, loading, error }) => {
                        return (
                            <div>
                                <form onSubmit={(e) => { handleSubmit(e, createTask) }}>
                                    <input type="text"
                                        ref={node => (this.tasktitle = node)} /><br />
                                    <textarea
                                        ref={node => (this.taskcontent = node)}></textarea><br />
                                    <input type="text"
                                        ref={node => { this.deadline = node }} /><br />
                                    <button >{loading ? "Yes boss..." : "Create Post"}</button>
                                    <button onClick={() => { this.props.history.push("/task") }}>キャンセル</button>
                                </form>
                                {error && <p>{error.message}</p>}
                            </div>
                        )
                    }}
                </Mutation>

            </div >
        )
    }
}

export default CreateTask;