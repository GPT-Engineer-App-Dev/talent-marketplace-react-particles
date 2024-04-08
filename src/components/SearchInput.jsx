import { Input } from "@chakra-ui/react";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return <Input placeholder="Search developers..." value={searchTerm} onChange={onSearchChange} mb={4} />;
};

export default SearchInput;
