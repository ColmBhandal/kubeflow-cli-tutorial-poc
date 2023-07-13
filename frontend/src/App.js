import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Textarea, Button, ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Arial',
    body: 'Arial',
  },
});

function App() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
      const { output } = await response.json();
      setOutput(output);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the output textarea when new output is received
    const outputTextarea = document.getElementById('output-textarea');
    outputTextarea.scrollTop = outputTextarea.scrollHeight;
  }, [output]);

  return (
    <ChakraProvider theme={theme}>
      <Box p={4}>
        <Heading as="h1" size="lg" mb={4}>
          Welcome to the Interactive CLI Tutorial
        </Heading>
        <Text mb={2}>Enter a command:</Text>
        <Textarea value={command} onChange={handleCommandChange} mb={4} />
        <Button colorScheme="teal" onClick={handleFormSubmit}>
          Execute
        </Button>
        <Text mt={4} fontWeight="bold">Output:</Text>
        <Textarea id="output-textarea" value={output} readOnly h="200px" mb={4} />
      </Box>
    </ChakraProvider>
  );
}

export default App;