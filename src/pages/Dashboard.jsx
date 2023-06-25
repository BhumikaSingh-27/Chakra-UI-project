import { Container, Heading, Text, Box } from "@chakra-ui/react";

export default function Dashboard() {
  const getStyle = {
    p: "50px",
    m: "10px",
    bg: "pink.400",
    fontSize: "2xl",
    filter: "blur(2px)",
    ":hover": {
      bg:"pink.50",
      fontSize:"6xl"
    }
  };
  return (
    <div>
      <Container as="section" my="20px">
        <Heading p="20px" my="10px">
          Chakra UI Heading
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          repellat? Officiis voluptatem qui est placeat sit ea, ipsum commodi
          fugiat accusamus a nesciunt aliquid culpa unde aspernatur dolorum,
          itaque tempore.
        </Text>

        <Box color="blue.500" p="20px" m="10px" bg="orange.50" fontSize="40px">
          <Text>This is a Box</Text>
        </Box>
        <Box sx={getStyle}>This is new box</Box>
      </Container>
    </div>
  );
}
