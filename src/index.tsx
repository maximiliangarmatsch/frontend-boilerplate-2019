import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker'
import App from './ui/app'
import { client } from './config/apollo.config';
import { Auth0Provider } from "./config/auth/react-auth0-spa";
import config from "./config/auth/auth_config.json";

const onRedirectCallback = () => {
    // A function that routes the user to the right place
    // after login
    // Use history targetUrl or window.location.pathname
};

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Auth0Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
