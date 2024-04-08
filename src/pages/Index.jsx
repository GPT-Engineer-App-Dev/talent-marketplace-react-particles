import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeveloperList from "../components/DeveloperList";
import SearchInput from "../components/SearchInput";
import TechnologyFilter from "../components/TechnologyFilter";
import developers from "../data/developers";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTechnologyChange = (technology, isChecked) => {
    if (isChecked) {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    } else {
      setSelectedTechnologies(selectedTechnologies.filter((tech) => tech !== technology));
    }
  };

  const getUniqueTechnologies = () => {
    const technologies = developers.flatMap((developer) => developer.technologies);
    return [...new Set(technologies)];
  };

  const filterDevelopers = () => {
    return developers.filter((developer) => {
      const { name, location, technologies } = developer;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const matchesSearchTerm = name.toLowerCase().includes(lowerCaseSearchTerm) || location.toLowerCase().includes(lowerCaseSearchTerm) || technologies.some((tech) => tech.toLowerCase().includes(lowerCaseSearchTerm));
      const matchesSelectedTechnologies = selectedTechnologies.length === 0 || selectedTechnologies.every((tech) => technologies.includes(tech));
      return matchesSearchTerm && matchesSelectedTechnologies;
    });
  };

  return (
    <Box>
      <Header />
      <Box as="main" py={8}>
        <Container maxW="6xl">
          <TechnologyFilter technologies={getUniqueTechnologies()} selectedTechnologies={selectedTechnologies} onTechnologyChange={handleTechnologyChange} />
          <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <DeveloperList developers={filterDevelopers()} />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
