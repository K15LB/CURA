import React, { Component } from 'react';
import { createChat } from '../graphql/mutations'
import { Mutation, graphql } from 'react-apollo';
import { Auth } from 'aws-amplify'
import uuidV4 from 'uuid/v4'
import gql from 'graphql-tag'
import { listChats } from '../graphql/queries'

// const ChatRouter = () => {
//     return (
//         <div>
//             <ul>
//                 <li><Link to='/after' />After</li>
//                 <li><Link to='/before' />Before</li>
//                 <li><Link to='/newcare' />NewCare</li>
//             </ul>
//         </div>
//     );
// }

class CreateChat extends Component {
    render() {

        const handleSubmit = (e, createChat) => {
            e.preventDefault();
            createChat({
                variables: {
                    input: {
                        chatid: uuidV4(),
                        username: Auth.user.username,
                        content: this.content.value,
                        chatstatus: true,
                    }
                }
            });
        }
        return (
            <Mutation mutation={gql(createChat)}>
                {(createChat, { data, loading, error }) => {
                    return (
                        <div>
                            <div>
                                <form onSubmit={(e) => { handleSubmit(e, createChat) }}>

                                    <textarea
                                        ref={node => (this.content = node)} /><br />
                                    <button>{loading ? "Yes boss..." : "Create Post"}</button>
                                </form>
                                {error && <p>{error.message}</p>}
                            </div>
                        </div>
                    )
                }}
            </Mutation>

        );
    }
}

export default CreateChat