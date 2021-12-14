import { Flex, Heading, Text, Box } from '@chakra-ui/react'

interface CityBannerProps {
    title: string;
    description: string;
    image: string;
}

export function CityBanner({ title, description, image }: CityBannerProps) {
    return(
        <Flex 
            h="100%" 
            w="100%"
            justify="center"
            align="center"
            flexDirection="column"
        >
            <Box 
                w="100%"
                h="100%"
                top={0}
                right={0}
                position="absolute"
                filter="brightness(0.4)"
                bgImage={`url(${image})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            />

            <Heading 
                color="gray.50"
                fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="bold"
                zIndex={99}
            >
                {title}
            </Heading>

            <Text 
                color="gray.100"
                fontWeight="bold"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
                zIndex={99}
            >
                {description}
            </Text>
        </Flex>
    )
}