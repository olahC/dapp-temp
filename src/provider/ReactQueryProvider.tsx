import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";

const queryCache = new QueryCache({
  onError: (error, query) => {
    if (error instanceof Error) console.error({ key: query.queryKey, error: error.message });
  },
});

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchInterval: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      notifyOnChangeProps:'all',
      retry:3,
    },
  },
});

export default function ReactQueryProvider({children}:any){
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
}