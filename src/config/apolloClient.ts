import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://blog-app-server-hmmp.onrender.com/graphql',
    cache: new InMemoryCache(),
});

export default client;
