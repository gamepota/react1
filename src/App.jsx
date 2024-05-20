import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Button sx={{ color: "orange" }} colorScheme={"blue"}>
        Lorem.ff
      </Button>
    </ChakraProvider>
  );
}

export default App;
