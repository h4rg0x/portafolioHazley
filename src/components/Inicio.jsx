import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import fotoPerfil from "../assets/profilepic.png";

// import { profileLogo } from "../public/profile.png";

export const Inicio = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // funcion de cambio de color de app

  const bg = useColorModeValue("white", "#1a202c");
  return (
    <Box
      bg={bg}
      id="inicio"
      className="container"
      display={["flex"]}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      flexDirection={["column", "column", "row"]}
      gap={"5%"}
      padding={["50px", "0px"]}
      marginTop={["30px", "0px"]}
    >
      <Box
        marginTop={"8%"}
        className="container"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={["80%", "80%", "50%"]}
      >
        <Image
          src={fotoPerfil}
          alt="imagen"
          width={["250px", "400px", "300px"]}
          rounded={"100px"}
          border={"2px"}
          justifyContent={"center"}
        />
      </Box>

      <Box
        marginTop={["0.5", "8%"]}
        alignItems={"center"}
        className="container"
        width={["100%", "80%", "50%"]}
      >
        <Text
          fontSize={["3xl", "4xl", "4xl", "6xl"]}
          textTransform={"capitalize"}
          marginTop={["0", "0"]}
          textAlign={"center"}
        >
          Hola! soy un <br /> {""}
          <span className="spanDev">desarrollador</span>
        </Text>
        <br />
        <Text textAlign={["center", "initial"]} fontSize={["20px", "2xl"]}>
          Que tal, me llamo Hazley! como pudiste observar soy un desarrollador
          tengo 20 años y soy muy apasionado con lo que me gusta hacer! tengo
          algunos conocimientos en lenguajes de programación, tales como: C, C++
          y Python.
        </Text>
      </Box>
    </Box>
  );
};
