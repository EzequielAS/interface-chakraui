import { Heading, Box, Flex, Text, Image } from '@chakra-ui/react'

export function Banner() {
    return(
        <Flex 
            w="100%"
            h={["163px", "250px", "250px", "335px"]}
            mb="6rem"
            bgImage="url('./background.jpg')"
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Flex 
                w="100%" 
                mx="auto" 
                align="center" 
                justify={["center", "space-between"]} 
                px={["4", "10", "15", "20", "36"]}
            >
                <Box>
                    <Heading color="gray.50" fontWeight="500" fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}>
                        5 continentes, <br />
                        infinitas possibilidades.
                    </Heading>
                    <Text color="gray.100" mt="5" fontSize={["0.8rem", "xl"]} maxW={["100%", "100%", "100%", "550px"]}>
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>

                <Image 
                    src="./airplane.png"
                    w={["300px", "300px", "300px", "450px"]}
                    display={["none", "none", "block"]}
                    alt="yellow airplane"
                    transform="translateY(48px)"
                    ml="8"
                />
            </Flex>
        </Flex>
    )
}