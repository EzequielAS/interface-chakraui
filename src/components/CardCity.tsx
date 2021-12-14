import { Box, Flex, Text, Image } from '@chakra-ui/react'



export function CardCity() {
    return(
        <Box
            borderRadius="5px"
            overflow="hidden"
        >
            <Box 
                bgImage="/london.png"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                minHeight="173px"
                width="100%"
            />

            <Flex
                border="1px"
                borderColor="yellow.100"
                borderTop="0"
                padding="6"
                align="center"
                justify="space-between"
                borderBottomRightRadius="5px"
                borderBottomLeftRadius="5px"
            >
                <Box>
                    <Text 
                        fontWeight="600" 
                        color="gray.600"
                        fontSize="1.2rem"
                    >
                        Londres
                    </Text>
                    <Text
                        fontWeight="md"
                        color="gray.300"
                    >
                        Reino Unido
                    </Text>
                </Box>

               
                <Image src="/england.png"/>
               
            </Flex>

        </Box>
    )
}