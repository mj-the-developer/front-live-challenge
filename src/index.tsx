import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { authenticatedFetch } from '@shopify/app-bridge/utilities';
import { createApp } from '@shopify/app-bridge';
import { Provider } from '@shopify/app-bridge-react';

import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { SafeStorage } from 'utils/SafeStorage';
import { isEmbeddedMode } from 'utils/isEmbeddedMode';
import { GRAPH_URI } from 'config/constants';

const params = new URLSearchParams(window.location.search);

const config = {
  apiKey: process.env.REACT_APP_API_KEY || '896f331f21433a11279ff68de031e9a7',
  host: params.get('host') || '',
  forceRedirect: params.get('embedded') === '1',
};

const httpLink =
  isEmbeddedMode() || (config.host && config.forceRedirect)
    ? new HttpLink({ uri: GRAPH_URI, credentials: 'same-origin', fetch: authenticatedFetch(createApp(config)) })
    : new HttpLink({ uri: GRAPH_URI });

const authLink = new ApolloLink((operation, forward) => {
  const token = SafeStorage.get('loggedInAsUserToken');

  if (!isEmbeddedMode() && token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    {isEmbeddedMode() ? (
      <Provider config={config}>
        <App />
      </Provider>
    ) : (
      <App />
    )}
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
