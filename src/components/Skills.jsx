import { Box, Text, Progress } from "@chakra-ui/react";

const skills = [
  { name: "Reactjs", percentage: 40 },
  { name: "Chakra UI", percentage: 80 },
  { name: "Python", percentage: 85 },
  { name: "C", percentage: 80 },
  { name: "C++", percentage: 80 },
  { name: "Pseint", percentage: 90 },
  { name: "Diseño Web", percentage: 80 },
  { name: "Desarrollo Web", percentage: 70 },
  // Agrega más habilidades aquí
];

export const Skills = () => {
  return (
    <Box
      p={4}
      marginTop={["0.5", "8%"]}
      alignItems={"center"}
      className="container"
      width={["100%", "80%", "50%"]}
      height={"100%"}
    >
      {skills.map((skill, index) => (
        <Box key={index} mb={4}>
          <Text fontWeight="bold" mb={2}>
            {skill.name}
          </Text>
          <Progress
            rounded={"50px"}
            value={skill.percentage}
            colorScheme="blue"
            size="md"
          />
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
