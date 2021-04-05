import { Box, Flex, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";

interface carProps {
  id?: string;
  name: string;
  image: string;
  country: string;
  code: string;

}

export function Card({ id = null, name, image, country, code }: carProps) {
  let controle = false
  if (name.length > 11) {
    controle = true
  }
  if (name.length <= 11) {
    controle = false
  }
  return (
    <Box w={250} h={270} bgColor="gray.500" borderRadius="2xl">
      <Flex
        direction="column">
        <Image
          w={250}

          borderTopRadius="2xl"
          src={image}
          alt="logo"
        />

        <Box
          w={250}
          h={110}
          bgColor="white"
          borderBottomRadius="2xl"
          borderLeft="1px solid"
          borderRight="1px solid"
          borderBottom="1px solid"
          borderLeftColor="yellow.500"
          borderRightColor="yellow.500"
          borderBottomColor="yellow.500"
        >
          <Grid w="100%" h="100%" mt="0.5rem" ml="0.8rem" templateColumns="repeat(3, 1fr)" gap={0.5}>
            <GridItem colSpan={2} >
              <Stack align="left" m="auto" spacing={0.2}>
                {controle ? (<Text fontSize="xl" color="gray.500" fontWeight="semibold">{name}</Text>) :
                  (<Text fontSize="2xl" color="gray.500" fontWeight="semibold">{name}</Text>)}
                <Text fontSize="xl" color="gray.100" fontWeight="medium">{country}</Text>
              </Stack>

            </GridItem>
            <GridItem colSpan={1} mt="0.5rem" >
              <Stack align="left" m="auto">
                <Box > </Box>
                <CircleFlag countryCode={code} height="40" width="40" />
              </Stack>

            </GridItem>


          </Grid>

        </Box>
      </Flex>
    </Box>
  );
}