import React from 'react';
import ReactDOM from 'react-dom';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import Amplify, { Auth } from 'aws-amplify';
import { ApolloProvider } from 'react-apollo'
import awsconfig from './aws-exports'

import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

