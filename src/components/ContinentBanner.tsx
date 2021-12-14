import { Flex, Text } from '@chakra-ui/react'

interface ContinentBannerProps {
    title: string;
    image: string;
}

export function ContinentBanner({ title, image } : ContinentBannerProps) {
    return(
        <Flex
            w="100%"
            maxW={1440}
            marginX="auto"
            h={["150px", "300px", "300px", "500px"]}
            mb="4rem"
            bgImage={`url(${image})`}
            bgPosition={["100% 20%", "100% 20%", "100% 40%"]}
            bgRepeat="no-repeat"
            bgSize="cover"
            justify="center"
            align="center"
            position="relative"
        >
            <Text 
                color="gray.50"
                fontWeight="medium"
                fontSize={["1.75rem", "2rem", "2rem", "3rem"]}
                position={["initial", "initial", "absolute"]}
                bottom={["50px"]}
                left={["0", "100px","100px", "130px"]}
            >
                {title}
            </Text>
        </Flex>
    )
}