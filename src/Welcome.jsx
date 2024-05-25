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
      <Text fontSize="lg" textAlign="center" mt="4">
        Preguntame sobre las salidas a predicar, las reuniones Vida y Ministerio Cristiano y del fin de semana.
      </Text>
      <Text fontSize="md" textAlign="center" color="teal.500" fontWeight="bold">
        Recuerda que soy una Inteligencia Artificial y puedo cometer errores, por favor chequea la información.
      </Text>

    </Flex>
  );
}

export default Welcome;