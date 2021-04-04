import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../components/Header";
import { continents } from "../continent";

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
  return (
    <>
      <Header isVarible={true} />
      <Flex
        w="100vw"
        h="100vh"
        direction="column"
      >
        <Box
          w="100vw"
          h="600px"
          backgroundImage={`url('/${continent.bannerImage}')`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >

        </Box>
        <Text fontSize="5xl" color="gray.50" mt="-9rem" ml="10rem" fontWeight="semibold">{continent.name}</Text>
        <Grid templateColumns="repeat(2, 1fr)" maxWidth={1440} mx="auto" mt="10rem" gap={5}>
          <Box w="550px">
            <Text fontSize="2xl" color="gray.500" fontWeight="normal">{continent.name}</Text>

          </Box>

          <Grid templateColumns="repeat(3, 1fr)" mx="auto" gap={3}>
            <Stack align="center" m="auto">
              <Text fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent.countries}</Text>
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">países</Text>
            </Stack>
            <Stack align="center" m="auto">
              <Text fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent.languages}</Text>
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">línguas</Text>
            </Stack>
            <Stack align="center" m="auto">
              <Text fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent.cities100}</Text>
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">cidades +100</Text>
            </Stack>

          </Grid>
        </Grid>

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
