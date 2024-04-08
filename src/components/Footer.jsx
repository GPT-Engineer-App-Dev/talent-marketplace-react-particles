import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={4} textAlign="center">
      <Link href="/contact">Contact Us</Link>
    </Box>
  );
};

export default Footer;
