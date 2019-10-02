import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { listChats } from '../graphql/queries';

import { onCreateChat } from '../graphql/subscriptions'
import gql from 'graphql-tag';
import ChatDetail from './chatdetail';

class RenderChat extends Component {
    subsribeNewChats = (subscribeToMore) => {
        return subscribeToMore({
            document: gql(onCreateChat),
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newChatData = subscriptionData.data.onCreateChat;
                return Object.assign({}, prev, {
                    listChats: {
                        ...prev.listChats,
                        items: [...prev.listChats.items, newChatData]
                    }
                })
            }
        })
    }


    render() {
        return (
            <div>
                <div>
                    <Query query={gql(listChats)}>
                        {({ data, loading, error, subscribeToMore }) => {
                            if (error) return (<p>Error</p>);
                            if (loading || !listChats) return (<p>Loading...</p>);

                            return (
                                <ChatDetail data={data} subscribeToMore={() => this.subsribeNewChats(subscribeToMore)} />
                            )
                        }}
                    </Query>
                </div>
            </div>
        )
    }
}
export default RenderChat
// export default compose(
//     graphql(gql(listChats), {
//         options: {
//             fetchPolicy: 'network-only'
//         },
//         props: props => ({
//             chats: props.data.listChats ? props.data.listChats.items : [],
//             subscribeToNewChats: params => {
//                 props.data.subscribeToMore({
//                     document: gql(onCreateChat),
//                     updateQuery: (prev, { subscriptionData: { data: { onCreateChats } } }) => {
//                         return {
//                             ...prev,
//                             listChats: {
//                                 __typename: 'ChatsConnection',
//                                 items: [onCreateChats, ...prev.listChats.items.filter(chat => chat.id !== onCreateChats.id)]
//                             }
//                         }
//                     }
//                 })
//             }
//         })
//     })
// )(RenderChat)