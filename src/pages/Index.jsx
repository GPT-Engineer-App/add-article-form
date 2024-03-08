import { Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, Select, Textarea, VStack, useToast } from "@chakra-ui/react";
import { FaSave, FaTimes } from "react-icons/fa";

const Index = () => {
  // You can replace the following example categories and suppliers with actual data
  const categories = ["Elettronica", "Abbigliamento", "Alimentari", "Libri"];
  const suppliers = ["Fornitore A", "Fornitore B", "Fornitore C"];

  // Example function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement validation logic here
    // If validation passes:
    toast({
      title: "Articolo salvato con successo.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Redirect to the article list if necessary
  };

  // Example function to handle form cancellation
  const handleCancel = () => {
    // Implement redirection logic here
  };

  // Toast for displaying messages
  const toast = useToast();

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isRequired>
            <FormLabel htmlFor="article-name">Nome Articolo</FormLabel>
            <Input id="article-name" placeholder="Inserisci il nome dell'articolo" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="article-code">Codice Articolo</FormLabel>
            <Input id="article-code" placeholder="Inserisci il codice univoco dell'articolo" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="article-gtin">GTIN</FormLabel>
            <Input id="article-gtin" placeholder="Inserisci il GTIN" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="article-quantity">Quantità</FormLabel>
            <NumberInput min={0}>
              <NumberInputField id="article-quantity" placeholder="Inserisci la quantità" />
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="article-price">Prezzo</FormLabel>
            <NumberInput precision={2} step={0.01} min={0}>
              <NumberInputField id="article-price" placeholder="Inserisci il prezzo unitario" />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="article-description">Descrizione</FormLabel>
            <Textarea id="article-description" placeholder="Inserisci una descrizione dettagliata" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="article-category">Categoria</FormLabel>
            <Select id="article-category" placeholder="Seleziona una categoria">
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="article-supplier">Fornitore</FormLabel>
            <Select id="article-supplier" placeholder="Seleziona un fornitore">
              {suppliers.map((supplier) => (
                <option key={supplier} value={supplier}>
                  {supplier}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box>
            <Button leftIcon={<FaSave />} colorScheme="blue" type="submit">
              Salva
            </Button>
            <Button leftIcon={<FaTimes />} colorScheme="red" ml={3} onClick={handleCancel}>
              Annulla
            </Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

export default Index;
