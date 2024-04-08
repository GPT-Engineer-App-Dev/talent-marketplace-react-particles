import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeveloperList from "../components/DeveloperList";
import SearchInput from "../components/SearchInput";
import TechnologyFilter from "../components/TechnologyFilter";
import developers from "../data/developers";

const allTechnologies = [...new Set(developers.flatMap((developer) => developer.technologies))];

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

  const filterDevelopers = (developers, searchTerm, selectedTechnologies) => {
    return developers.filter((developer) => {
      const { name, location, technologies } = developer;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const matchesSearchTerm = name.toLowerCase().includes(lowerCaseSearchTerm) || location.toLowerCase().includes(lowerCaseSearchTerm) || technologies.some((tech) => tech.toLowerCase().includes(lowerCaseSearchTerm));
      const matchesTechnologies = selectedTechnologies.length === 0 || selectedTechnologies.every((tech) => technologies.includes(tech));
      return matchesSearchTerm && matchesTechnologies;
    });
  };

  const filteredDevelopers = filterDevelopers(developers, searchTerm, selectedTechnologies);

  return (
    <Box>
      <Header />
      <Box as="main" py={8}>
        <Container maxW="6xl">
          <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <TechnologyFilter technologies={allTechnologies} selectedTechnologies={selectedTechnologies} onTechnologyChange={handleTechnologyChange} />
          <DeveloperList developers={filteredDevelopers} />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
