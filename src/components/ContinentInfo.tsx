import { Grid, Flex, Text, Tooltip } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

export function ContinentInfo() {
    return(
        <Grid
            templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
            justifyContent="space-between"
            align="center"
            mx="auto"
            maxW="1160px"
            marginBottom="5rem"
            width="95%"
            gap="3.5rem"
        >

            <Text
                flex="1"
                textAlign="justify"
                fontSize={["0.9rem", "1.3rem", "1.3rem", "1.5rem"]}
                marginBottom="1rem"
            >
                A Europa é, por convenção, um dos seis 
                continentes do mundo. Compreendendo a 
                península ocidental da Eurásia, a Europa 
                geralmente divide-se da Ásia a leste pela 
                divisória de águas dos montes Urais, o rio Ural, 
                o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>

            <Flex
                flex="1"
                justify="space-around"
                align="center"
                fontWeight="600"
            >
                <Flex
                    justify="center"
                    align="center"
                    flexDir="column"
                >
                    <Text 
                        color="yellow.900"
                        fontSize={["1.75rem", "2rem", "2rem", "3rem"]}
                    >
                        50
                    </Text>
                    <Text
                        color="gray.600"
                        fontSize={["1.125rem", "1.2rem", "1.2rem", "1.5rem"]}
                    >
                        países
                    </Text>
                </Flex>

                <Flex
                    justify="center"
                    align="center"
                    flexDir="column"
                >
                    <Text
                        color="yellow.900"
                        fontSize={["1.75rem", "2rem", "2rem", "3rem"]}
                    >
                        60
                    </Text>
                    <Text
                        color="gray.600"
                        fontSize={["1.125rem", "1.2rem", "1.2rem", "1.5rem"]}
                    >
                        línguas
                    </Text>
                </Flex>

                <Flex
                    justify="center"
                    align="center"
                    flexDir="column"
                >
                    <Text
                        color="yellow.900"
                        fontSize={["1.75rem", "2rem", "2rem", "3rem"]}
                    >
                        27
                    </Text>
                    <Text
                        color="gray.600"
                        fontSize={["1.125rem", "1.2rem", "1.2rem", "1.5rem"]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        cidades +100 
                        <Tooltip 
                            label="Confira quais são estas cidades" 
                            hasArrow
                        >
                            <InfoOutlineIcon fontSize={["small", "small", "small", "md"]} color="gray.100" ml="0.5rem"/>
                        </Tooltip>
                    </Text>
                </Flex>
            </Flex>

        </Grid>
    )
}