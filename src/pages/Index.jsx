import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeveloperList from "../components/DeveloperList";
import developers from "../data/developers";

const Index = () => {
  return (
    <Box>
      <Header />
      <Box as="main" py={8}>
        <DeveloperList developers={developers} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
