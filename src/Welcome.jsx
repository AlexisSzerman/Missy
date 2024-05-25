import { Image, Flex, Text } from '@chakra-ui/react';
import logo from './assets/logo.svg';

function Welcome() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      bg="gray.300"
    >
      <Image boxSize="200px" src={logo} alt="Missy Logo" />
      <Text fontSize="3xl" fontWeight="bold" mt="4">
        Missy
      </Text>
      <Text fontSize="xl" textAlign="center">
        Asistente Virtual de Cong. Plaza de la Misericordia
      </Text>

    </Flex>
  );
}

export default Welcome;