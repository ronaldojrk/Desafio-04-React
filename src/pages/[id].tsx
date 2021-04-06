import { Box, Flex, Grid, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../components/Header";
import { continents } from "../continent";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Card } from "../components/Card";

interface City {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}
interface ContinentProps {
  continent: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: City[];
  }
}
export default function Continent({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <>
      <Header isVarible={true} />
      <Flex
        w="100vw"

        direction="column"
      >
        <Box
          w="100vw"
          h="600px"
          backgroundImage={`url('/${continent.bannerImage}')`}
          backgroundRepeat="no-repeat"
          bgPosition="center"
          backgroundSize="cover"
        >

        </Box>
        {isWideVersion ? (<Text fontSize="5xl" color="gray.50" mt="-9rem" ml="6.8rem" fontWeight="semibold">{continent.name}</Text>) : (
          <Text fontSize="5xl" color="gray.50" mt="-9rem" mx="auto" fontWeight="semibold">{continent.name}</Text>

        )}
        {isWideVersion && (
          <Grid templateColumns="repeat(2, 1fr)" maxWidth={1440} ml="6.8rem" mt="10rem" gap={5}>
            <Box w="600px">
              <Text fontSize="2xl" textAlign="justify" color="gray.500" fontWeight="normal">{continent.about}</Text>

            </Box>

            <Grid templateColumns="repeat(3, 1fr)" w="550px" ml="-4rem" align="left" gap={0}>
              <Stack align="center" m="auto">
                <Text fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent.countries}</Text>
                <Text fontSize="xl" color="gray.500" fontWeight="semibold">países</Text>
              </Stack>
              <Stack align="center" m="auto">
                <Text fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent.languages}</Text>
                <Text fontSize="xl" color="gray.500" fontWeight="semibold">línguas</Text>
              </Stack>
              <HStack align="center" m="auto">
                <Stack align="center" m="auto">
                  <Text fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent.cities100}</Text>
                  <Text fontSize="xl" color="gray.500" fontWeight="semibold">cidades +100</Text>
                </Stack>
                <Stack align="center" m="auto">
                  <Box h="4.5rem"> </Box>
                  <InfoOutlineIcon w={4} h={4} mt="30rem" color="gray.100" />
                </Stack>
              </HStack>

            </Grid>
          </Grid>)}
        {!isWideVersion && (
          <Grid templateColumns="repeat(1, 1fr)" maxWidth={[400, 700, 800, 1400]} align="center" justifyContent="center" mx="auto" mt="10rem" gap={5}>
            <Box w={["300px", "600px"]} mx="auto">
              <Text fontSize={["sm", "2xl"]} align="center" m="auto" textAlign="justify" color="gray.500" fontWeight="normal">{continent.about}</Text>

            </Box>

            <Grid templateColumns="repeat(3 , 1fr)" mx="auto" gap={0}>
              <Stack align="left" my="auto" >
                <Text fontSize={["2xl", "5xl"]} align="left" color="yellow.500" fontWeight="semibold">{continent.countries}</Text>
                <Text fontSize={["lg", "xl"]} align="left" color="gray.500" fontWeight={["normal", "semibold"]}>países</Text>
              </Stack>
              <Stack align="left" ml="-1rem" my="auto" >
                <Text fontSize={["2xl", "5xl"]} align="left" color="yellow.500" fontWeight="semibold">{continent.languages}</Text>
                <Text fontSize={["lg", "xl"]} align="left" color="gray.500" fontWeight={["normal", "semibold"]}>línguas</Text>
              </Stack>
              <HStack align="left" ml="-2rem" my="auto">
                <Stack align="left">
                  <Text fontSize={["2xl", "5xl"]} align="left" color="yellow.500" fontWeight="semibold">{continent.cities100}</Text>
                  <Text fontSize={["lg", "xl"]} align="left" color="gray.500" fontWeight={["normal", "semibold"]}>cidades +100 <InfoOutlineIcon w={2} h={2} color="gray.100" /></Text>
                </Stack>

              </HStack>

            </Grid>
          </Grid>)}
        <Grid templateColumns="repeat(1, 1fr)" maxWidth={[500, 700, 800, 1400]} mt="5rem" gap={5}>

          {isWideVersion ? (<Text fontSize={["xl", "2xl", "4xl"]} align={["center", "left"]} color="gray.500" ml={["2rem", "5rem", "6.8rem"]} mb="2rem" fontWeight="medium">Cidades +100</Text>) : (
            <Text fontSize={["xl", "2xl", "4xl"]} color="gray.500" mx="auto" fontWeight="medium">Cidades +100</Text>
          )}
        </Grid>

        {isWideVersion && (
          <Grid templateColumns="repeat(4, 1fr)" w="1200px" ml="6.8rem" gap={10}>
            {continent.cities.map(cities => (

              <Card id={cities.id} name={cities.name} image={cities.image} country={cities.country} code={cities.code} />

            ))}
          </Grid>)}
        {!isWideVersion && (
          <Grid templateColumns="repeat(1, 1fr)" mx="auto" gap={5}>
            {continent.cities.map(cities => (

              <Card id={cities.id} name={cities.name} image={cities.image} country={cities.country} code={cities.code} />

            ))}
          </Grid>)}

      </Flex>

    </>
  );

};



export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: continents.map((continent) => {
      return {
        params: {
          id: continent.id,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  return {
    props: {
      continent: continents.find((continent) => continent.id === id),
    },
  };
};
