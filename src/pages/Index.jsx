import { Container, VStack, Box, Flex, Spacer, Heading, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Canvas App
          </Heading>
        </Flex>
        <Spacer />
        <Box display={{ base: "block", md: "none" }}>
          <IconButton icon={<FaBars />} aria-label="Menu" />
        </Box>
      </Flex>
      <VStack spacing={4} align="stretch" height="calc(100vh - 80px)" justifyContent="center">
        <Box borderWidth="1px" borderRadius="lg" height="100%" bg="gray.50" />
      </VStack>
    </Container>
  );
};

export default Index;