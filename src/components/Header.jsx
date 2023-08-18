import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Collapse,
  useDisclosure,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useState } from "react";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode(); // funcion de cambio de color de app

  const bg = useColorModeValue("white", "#1a202c");

  return (
    <Box
      bg={bg}
      as="nav"
      p={4}
      // color="black"
      top={"0"}
      width={"100%"}
      position={"fixed"}
      zIndex={"2"}
    >
      <Flex justify="space-between" align="center">
        <Heading>Portafolio</Heading>

        <Button
          marginLeft={{ base: "90px", md: "none" }}
          display={{ base: "block", md: "none" }}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Menu"
        />

        {/* Mostrar los botones en pantallas grandes */}
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <a href="#inicio">
            <Button fontWeight={"normal"} variant="ghost" mr={3}>
              Inicio
            </Button>
          </a>

          <a href="#proyectos">
            <Button fontWeight={"normal"} variant="ghost" mr={3}>
              Proyectos
            </Button>
          </a>

          <a href="#acerca">
            <Button fontWeight={"normal"} variant="ghost" mr={3}>
              Acerca de
            </Button>
          </a>
          <a href="#contacto">
            <Button fontWeight={"normal"} variant="ghost" mr={3}>
              Contacto
            </Button>
          </a>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      {/* Mostrar los botones en el menú desplegable en modo responsive */}
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="column"
          align="center"
          mt={4}
          display={{ base: "flex", md: "none" }}
        >
          <a href="#inicio">
            <Button
              onClick={onToggle} // para cerrar el menu al tocar el boton y tener mejor visibilidad para el usuario
              fontWeight={"medium"}
              variant="ghost"
              mb={2}
            >
              Inicio
            </Button>
          </a>
          <a href="#proyectos">
            <Button
              onClick={onToggle}
              fontWeight={"medium"}
              variant="ghost"
              mb={2}
            >
              Proyectos
            </Button>
          </a>

          <a href="#acerca">
            <Button
              onClick={onToggle}
              fontWeight={"medium"}
              variant="ghost"
              mb={2}
            >
              Acerca de
            </Button>
          </a>
          <a href="#contacto">
            <Button
              onClick={onToggle}
              fontWeight={"medium"}
              variant="ghost"
              mb={2}
            >
              Contacto
            </Button>
          </a>
        </Flex>
      </Collapse>
    </Box>
  );
};
