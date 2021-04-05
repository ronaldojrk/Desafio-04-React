import { Image, Flex, Link, Grid, Stack, useBreakpointValue } from "@chakra-ui/react"


interface headerProps {
  isVarible: boolean;
}

export function Header({ isVarible }: headerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>

      {isWideVersion && (
        <Flex
          as="label"
          h="100"
          py="4"
          px="4"
          maxWidth={1440}
          alignItems="center"
          justifyContent="center"
        >
          {isVarible && (<Grid templateColumns="repeat(5, 1fr)" maxWidth={1440} h="100%" mx="auto" gap={16}>

            <Stack align="center" m="auto">
              <Link href="/"
              >
                <a>
                  <Image objectFit="cover"
                    src="/voltar.svg" />
                </a>
              </Link>

            </Stack>
            <Stack align="center" w="100px" m="auto">
            </Stack>
            <Stack align="center" m="auto">
              <Image

                objectFit="cover"
                src="/Logo.svg"
                alt="logo"
              />
            </Stack>
            <Stack align="center" w="100px" m="auto">
            </Stack>
            <Stack align="center" w="100px" m="auto">
            </Stack>
          </Grid>)}
          {!isVarible && (
            <Image

              objectFit="cover"
              src="/Logo.svg"
              alt="logo"
            />
          )}

        </Flex>
      )}
      {!isWideVersion && (
        <Flex
          as="label"
          h="100"
          py="4"
          px="4"
          maxWidth={1440}
          alignItems="center"
          justifyContent="center"
        >
          {isVarible && (<Grid templateColumns="repeat(5, 1fr)" maxWidth={[500, 700, 800, 1400]} h="100%" mx="auto" gap={2}>

            <Stack align="center" m="auto">
              <Link href="/"
              >
                <a>
                  <Image objectFit="cover"
                    src="/voltar.svg" />
                </a>
              </Link>

            </Stack>
            <Stack align="center" w="50px" m="auto">
            </Stack>
            <Stack align="center" m="auto">
              <Image

                objectFit="cover"
                src="/Logo.svg"
                alt="logo"
              />
            </Stack>
            <Stack align="center" w="50px" m="auto">
            </Stack>
            <Stack align="center" w="50px" m="auto">
            </Stack>
          </Grid>)}
          {!isVarible && (
            <Image

              objectFit="cover"
              src="/Logo.svg"
              alt="logo"
            />
          )}

        </Flex>
      )}
    </>
  );
}