import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="gray.100" py={4}>
      <Box maxW="6xl" mx="auto">
        <Heading as="h1" size="xl">
          React Particles Marketplace
        </Heading>
        <Text mt={2}>Discover and purchase high-quality React components and templates</Text>
      </Box>
    </Box>
  );
};

export default Header;
