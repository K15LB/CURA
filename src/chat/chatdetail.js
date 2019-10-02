import React, { Component } from 'react';
import moment from 'moment'

class RenderChat extends Component {

    componentDidMount() {
        this.props.subscribeToMore();
    }

    render() {
        const chat = this.props.data.listChats.items;
        console.log(chat);
        const timestump = moment(chat.createdAt).format('MM/DD HH:MM');
        // const { chat } = this.props.data;
        return chat.map((chat) => {
            return (
                <div>

                    <div key={chat.id}>
                        <p>{chat.username}:{chat.content}</p>
                        <p>{timestump}</p>
                    </div>
                </div>
            )
        })

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