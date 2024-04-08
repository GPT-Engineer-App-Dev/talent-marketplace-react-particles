import { Box, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Header />
      <Box as="main" py={8}>
        <Button>
          Hello world! <FaPlus />
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
