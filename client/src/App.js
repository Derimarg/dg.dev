import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
     <ApolloProvider client={client}>
     <>
        <GlobalStyles />
        <Main theme={themes[theme]} setTheme={setTheme} />
      </>
     </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
