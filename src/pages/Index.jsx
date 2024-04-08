import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeveloperList from "../components/DeveloperList";
import SearchInput from "../components/SearchInput";
import developers from "../data/developers";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterDevelopers = () => {
    return developers.filter((developer) => {
      const { name, location, technologies } = developer;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return name.toLowerCase().includes(lowerCaseSearchTerm) || location.toLowerCase().includes(lowerCaseSearchTerm) || technologies.some((tech) => tech.toLowerCase().includes(lowerCaseSearchTerm));
    });
  };

  return (
    <Box>
      <Header />
      <Box as="main" py={8}>
        <Container maxW="6xl">
          <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <DeveloperList developers={filterDevelopers()} />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
