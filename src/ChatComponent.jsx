/* import { useState } from 'react';
import { Box, Button, Input, IconButton, VStack, HStack } from '@chakra-ui/react';
import { ChatIcon, ArrowRightIcon } from '@chakra-ui/icons';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
      setInput('');

      try {
        const response = await axios.post('http://localhost:5000/chat', { userInput: input });
        const botMessage = { sender: 'bot', text: response.data.response };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <Box position="fixed" bottom="20px" right="20px">
      <IconButton
        icon={<ChatIcon />}
        isRound
        size="lg"
        colorScheme="teal"
        onClick={toggleChat}
      />
      {isOpen && (
        <Box
          w="300px"
          h="400px"
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          overflow="hidden"
          mt="4"
        >
          <VStack h="full" justify="space-between">
            <Box w="full" p="4" overflowY="auto" flex="1">
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  bg={msg.sender === 'user' ? 'teal.100' : 'gray.100'}
                  p="2"
                  borderRadius="md"
                  mb="2"
                  maxW="80%"
                  alignSelf={msg.sender === 'user' ? 'flex-start' : 'flex-end'}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </Box>
              ))}
            </Box>
            <HStack w="full" p="4" borderTop="1px" borderColor="gray.200">
              <Input
                placeholder="Preguntar..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => (e.key === 'Enter' ? sendMessage() : null)}
              />
              <Button colorScheme="teal" onClick={sendMessage} rightIcon={<ArrowRightIcon />}>
                Enviar
              </Button>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default ChatComponent; */

import { useState } from 'react';
import {
  Box,
  Button,
  Input,
  IconButton,
  VStack,
  HStack,
  Spinner,
} from '@chakra-ui/react';
import { ChatIcon, ArrowRightIcon } from '@chakra-ui/icons';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
      setInput('');
      setLoading(true);

      try {
        const response = await axios.post('https://alexszer.pythonanywhere.com/chat', { userInput: input });
        const botMessage = { sender: 'bot', text: response.data.response };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box position="fixed" bottom="20px" right="20px">
      <IconButton
        icon={<ChatIcon />}
        isRound
        size="lg"
        colorScheme="teal"
        onClick={toggleChat}
      />
      {isOpen && (
        <Box
          w="300px"
          h="400px"
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          overflow="hidden"
          mt="4"
        >
          <VStack h="full" justify="space-between">
            <Box w="full" p="4" overflowY="auto" flex="1">
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  bg={msg.sender === 'user' ? 'teal.100' : 'gray.100'}
                  p="2"
                  borderRadius="md"
                  mb="2"
                  maxW="80%"
                  alignSelf={msg.sender === 'user' ? 'flex-start' : 'flex-end'}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </Box>
              ))}
              {loading && (
                <Box display="flex" justifyContent="center" mt="2">
                  <Spinner color="teal.500" size="md" />
                </Box>
              )}
            </Box>
            <HStack w="full" p="4" borderTop="1px" borderColor="gray.200">
              <Input
                placeholder="Preguntar..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => (e.key === 'Enter' ? sendMessage() : null)}
                isDisabled={loading}
              />
              <Button
                colorScheme="teal"
                onClick={sendMessage}
                rightIcon={<ArrowRightIcon />}
                isLoading={loading}
              >
                Enviar
              </Button>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default ChatComponent;

