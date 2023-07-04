import { Flex, Box, Text, Button, Heading, Spacer,HStack} from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <div>
      <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1">MyTasks</Heading>
        <Spacer />
        <HStack spacing="20px">
        <Box bg="gray.200" p="10px">B</Box>
        <Text>bhumi@gmail.com</Text>
        <Button colorScheme="messenger">Logout</Button>
        </HStack>
      </Flex>
      {/* <Flex bg="gray" justify="space-between" gap="2px"  wrap="wrap">
            <Box w="150px" h="90px" bg="red">1</Box>
            <Box w="150px" h="90px" bg="blue">2</Box>
            <Box w="150px" h="90px" flexGrow="1" bg="green">3</Box>
            <Box w="150px" h="90px" flexGrow="2" bg="pink">4</Box>
        </Flex> */}
    </div>
  );
};
