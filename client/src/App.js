import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WordCloud from './WordCloud';

const queryClient = new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>
      <WordCloud />
    </QueryClientProvider>
);

export default App;
