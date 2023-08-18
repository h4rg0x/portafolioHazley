import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { Cards } from "./Cards";

export const Servicios = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // funcion de cambio de color de app

  const bg = useColorModeValue("white", "#1a202c");
  return (
    <Box
      bg={bg}
      id="proyectos"
      // display={["column", "flex"]}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"100px"}
      height={["2000px", "100vh"]}
      width={"100%"}
      padding={["55px", "20px"]}
    >
      <Box marginTop={"5%"}>
        <Heading textAlign={"center"} top={"30%"} marginBottom={"3%"}>
          Proyectos
        </Heading>
        <Box>
          <Cards />
        </Box>
      </Box>
    </Box>
  );
};
