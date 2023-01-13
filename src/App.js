/*
JSX (function that returns HTML tags)

state (a variable that are subject to change)

... (an array composed of everything in the old array and the new thing after)

&& (followed by codes to execute should the condition be true)

event (used to grab information about input)

react query (library that allows you to make API calls)

yup (library that allows you to validate data)

custom hook (flexible function that can be used in multiple components)

*/

import "./App.css";
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
