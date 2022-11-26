import React from "react";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import theme from "./theme/theme";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <Home />
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
