import { useState } from "react";
import "./Index.css";
import { Box, Heading } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";

import { Servicios } from "./components/Servicios";
import { Acerca } from "./components/Acerca";
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <Box>
      <Header />
      <Inicio />
      <Servicios />
      <Acerca />
      <Contacto />
    </Box>
  );
}

export default App;
