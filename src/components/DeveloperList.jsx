import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const DeveloperList = ({ developers }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Our Developers
      </Heading>
      <Stack spacing={8}>
        {developers.map((developer, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md">
            <Heading as="h3" size="md">
              {developer.name}
            </Heading>
            <Text mt={2}>{developer.location}</Text>
            <Text mt={2}>
              <strong>Technologies:</strong> {developer.technologies.join(", ")}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default DeveloperList;
