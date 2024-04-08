import { Box, Checkbox, Stack } from "@chakra-ui/react";

const TechnologyFilter = ({ technologies, selectedTechnologies, onTechnologyChange }) => {
  return (
    <Box mb={4}>
      <Stack spacing={2}>
        {technologies.map((technology) => (
          <Checkbox key={technology} isChecked={selectedTechnologies.includes(technology)} onChange={(e) => onTechnologyChange(technology, e.target.checked)}>
            {technology}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};

export default TechnologyFilter;
