import React from "react";

import {
  Box,
  Image,
  Text,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Card,
  Button,
} from "@chakra-ui/react";

import cardVacksin from "../assets/vacksinCard.png";
import cardToDo from "../assets/ToDoCard.png";
import cardCita from "../assets/CitasCard.png";

export const Cards = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={["column", "row"]}
      gap={"5%"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"absolute"}
      zIndex={"1"}
      marginRight={"50px"}
      marginLeft={["0px", "10px"]}
    >
      <Card
        w={["100%", "30%"]}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        marginBottom={["20px", "0px"]}
        shadow={"md"}
      >
        <Image
          className="img"
          left={["0", "50px"]}
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={cardVacksin}
          alt="ImagenProyecto"
        />

        <Stack>
          <CardBody textAlign={["center", "initial"]}>
            <Heading size="md">Vacksin</Heading>

            <Text py="2" mt="5">
              Esta es una página web acerca de vacunas aquí sólo trata de diseño
              web, no tiene funcionalidad.
            </Text>
          </CardBody>

          <CardFooter marginLeft={["30%", "0%"]}>
            <a href="https://h4rg0x.github.io/Vacksin/" target="_blank">
              <Button variant="solid" colorScheme="blue">
                Visitar
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        w={["100%", "30%"]}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        marginBottom={["20px", "0px"]}
        shadow={"md"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={cardToDo}
          alt="ImagenProyecto"
        />

        <Stack>
          <CardBody textAlign={["center", "initial"]}>
            <Heading size="md">To-Do</Heading>

            <Text py="2" mt="5">
              Ésta es una aplicación hecha con Reactjs totalmente funcional y
              responsive.
            </Text>
          </CardBody>

          <CardFooter marginLeft={["30%", "0%"]}>
            <a
              href="https://resilient-sprite-ca213a.netlify.app/"
              target="_blank"
            >
              <Button variant="solid" colorScheme="blue">
                Visitar
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        w={["100%", "30%"]}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        marginBottom={["20px", "0px"]}
        shadow={"md"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={cardCita}
          alt="ImagenProyecto"
        />

        <Stack>
          <CardBody textAlign={["center", "initial"]}>
            <Heading size="md">Citas</Heading>

            <Text py="2" mt="5">
              Ésta es una aplicación hecha con Reactjs totalmente funcional y
              responsive.
            </Text>
          </CardBody>

          <CardFooter marginLeft={["30%", "0%"]}>
            <a
              href="https://thunderous-licorice-e89839.netlify.app/"
              target="_blank"
            >
              <Button variant="solid" colorScheme="blue">
                Visitar
              </Button>
            </a>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};
