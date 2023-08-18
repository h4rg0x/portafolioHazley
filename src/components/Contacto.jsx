import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Contacto = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // funcion de cambio de color de app

  const bg = useColorModeValue("white", "#1a202c");
  return (
    <Box
      id="contacto"
      bg={bg}
      display={["column"]}
      justifyContent={"center"}
      textAlign={"center"}
      alignItems={"center"}
      marginTop={"60px"}
      height={"200px"}
      width={"100%"}
      padding={["55px", "20px"]}
      //   bg={"red"}
    >
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        Contacto
      </Text>
      <Box display={"flex"} justifyContent={"center"} gap={"20px"}>
        <a className="ahover" href="https://github.com/h4rg0x" target="_blank">
          <FontAwesomeIcon fontSize={"40px"} icon={faGithub} />
        </a>

        <a
          className="ahover"
          href="https://www.linkedin.com/in/hazley-jarquin-gallo-ab2425288/"
          target="_blank"
        >
          <FontAwesomeIcon fontSize={"40px"} icon={faLinkedinIn} />
        </a>

        <a
          className="ahover"
          href="mailto:exgallo85@gmail.com?subject=Contact%20you&body=Hi%20Hazley!%20I%20need%20to%20contact%20you%20"
          target="_blank"
        >
          <FontAwesomeIcon fontSize={"40px"} icon={faEnvelope} />
        </a>
      </Box>
    </Box>
  );
};
