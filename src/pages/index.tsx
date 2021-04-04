import { Box, Flex, Grid, HStack, Image, Stack, Text, Link as ChakraLink, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { api } from "../services/api";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { continents } from "../continent";
import { GetStaticProps } from "next";

SwiperCore.use([Navigation, Pagination]);

interface Continent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface HomeProps {
  continents: Continent[];
}


export default function Home({ continents }: HomeProps) {

  return (
    <>
      <Header isVarible={false} />
      <Flex
        w="100vw"
        h="100vh"
        direction="column"
      >
        <Box
          w="100vw"
          h="300px"
          backgroundImage="url('/Background.png')"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Flex w="100%" my="6" mb="37" justifyContent="space-between" maxWidth={1480} mx="auto" px="6">
            <Grid templateColumns="repeat(2, 1fr)" maxWidth={1200} m="auto" gap={10}>
              <Stack mt="10">
                <Text fontSize="4xl" color="gray.50" fontWeight="medium">5 Continentes,</Text>
                <Text fontSize="4xl" color="gray.50" fontWeight="medium">infinitas possibilidades.</Text>
                <Box>
                  <Text fontSize="xl" color="gray.100" fontWeight="normal">Chegou a hora de tirar do papel a viagem que você</Text>
                  <Text fontSize="xl" color="gray.100" fontWeight="normal">sempre sonhou. </Text>
                </Box>
              </Stack>

              <Box ml="auto" >
                <Image
                  mt="4"
                  objectFit="cover"
                  src="/Airplane.svg"
                  alt="logo"
                />
              </Box>

            </Grid>

          </Flex>


        </Box>
        <Box
          w="100vw"
          mt="20"
        >
          <Grid templateColumns="repeat(5, 1fr)" mt="12" maxWidth={1160} mx="auto" gap={3}>
            <Stack align="center" m="auto">
              <Image
                align="center"
                boxSize="85px"
                objectFit="cover"
                src="/cocktail.svg"
                alt="logo"
              />
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">vida noturna</Text>
            </Stack>
            <Stack align="center" m="auto">
              <Image
                boxSize="85px"
                objectFit="cover"
                src="/surf.svg"
                alt="logo"
              />
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">praia</Text>
            </Stack>
            <Stack align="center" m="auto">
              <Image
                boxSize="85px"
                objectFit="cover"
                src="/building.svg"
                alt="logo"
              />
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">moderno</Text>
            </Stack>
            <Stack align="center" m="auto">
              <Image
                boxSize="85px"
                objectFit="cover"
                src="/museum.svg"
                alt="logo"
              />
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">clássico</Text>
            </Stack>
            <Stack align="center" m="auto">
              <Image
                boxSize="85px"
                objectFit="cover"
                src="/earth.svg"
                alt="logo"
              />
              <Text fontSize="xl" color="gray.500" fontWeight="semibold">e mais...</Text>
            </Stack>
          </Grid>
        </Box>
        <Box maxWidth={1480} align="center" mt="20" ml="23.8" mx="auto">
          <Box align="center" borderRadius="full" maxHeight={8} mb="14" maxWidth={90} backgroundColor="gray.900" border="2px solid" color="gray.900" >

          </Box>
          <Text fontSize="4xl" color="gray.500" fontWeight="medium">Vamos nessa?</Text>
          <Text fontSize="4xl" color="gray.500" fontWeight="medium">Então escolha seu continente</Text>
        </Box>
        <Box w="80vw" align="center" justifyContent="center" mx="auto">

          <Box w="100%" h="450px" mt="4rem" mb="2rem" align="center" justifyContent="center">
            <Swiper slidesPerView={1} navigation pagination>
              {continents.map(continent => (
                <SwiperSlide key={continent.id}>

                  <Flex
                    backgroundImage={`url('${continent.callImage}')`}
                    backgroundRepeat="no-repeat"
                    backgroundSize="auto"
                    direction="row"
                    justify="center"
                    align="center"
                    h="450px"

                    objectFit="cover"
                    color="gray.50"
                    flexDir="column"
                  >
                    <Link href={`/${continent.id}`} passHref>
                      <ChakraLink
                        _hover={{ color: "yellow.500" }}
                        justify="center"
                        align="center"
                      >
                        <Heading fontSize="5xl" fontWeight="bold" color="gray.50">
                          {continent.name}
                        </Heading>
                        <Text
                          mt="1rem"
                          color="gray.100"
                          fontWeight="bold"
                          fontSize="2xl"
                        >
                          {continent.call}
                        </Text>
                      </ChakraLink>
                    </Link>
                  </Flex>

                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

        </Box>


      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents: continents.map((continent) => ({
        id: continent.id,
        name: continent.name,
        call: continent.call,
        callImage: continent.callImage,
      })),
    },
  };
};