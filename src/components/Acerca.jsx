import {
  Box,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Skills from "./Skills";

export const Acerca = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // funcion de cambio de color de app

  const bg = useColorModeValue("white", "#1a202c");
  return (
    <Box
      id="acerca"
      bg={bg}
      display={["column", "flex"]}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"60px"}
      height={["1000px", "100vh"]}
      width={"100%"}
      padding={["55px", "20px"]}
      // bg={"blue"}
    >
      <Box
        marginTop={["0.5", "8%"]}
        alignItems={"center"}
        className="container"
        width={["100%", "80%", "50%"]}
      >
        <Heading width={"100%"} textAlign={"center"}>
          Acerca de mi
        </Heading>
        <br />
        <Text
          display={["none", "flex"]}
          textAlign={"center"}
          fontSize={["20px", "2xl"]}
        >
          Hola! soy Hazley y tengo 20 años, actualmente estoy estudiando
          Ingeniería en Sistemas y al pasar del tiempo he adquirido muchos
          conocimientos acerca de lenguajes de programación y diseño y
          desarrollo web, también tengo conocimiento en Inglés un 70%, al lado
          derecho te dejaré un promedio de mis conocimientos.
        </Text>

        <Text
          display={["column", "none"]}
          textAlign={"center"}
          fontSize={["20px", "2xl"]}
        >
          Hola! soy Hazley y tengo 20 años, actualmente estoy estudiando
          Ingeniería en Sistemas y al pasar del tiempo he adquirido muchos
          conocimientos acerca de lenguajes de programación y diseño y
          desarrollo web, también tengo conocimiento en Inglés un 70%, abajo te
          dejaré un promedio de mis conocimientos.
        </Text>
      </Box>
      <Box
        marginTop={"4%"}
        className="container"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={["80%", "80%", "50%"]}
      >
        <Skills />
      </Box>
    </Box>
  );
};
