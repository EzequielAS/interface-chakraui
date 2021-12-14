import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface ActivitiesProps {
    text: string;
    src: string;
}

export function Activity({ text, src }: ActivitiesProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true
      })

    return(
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            flexDir={["row", "column", "column"]}
        >
            {isWideVersion ?
                <Image 
                    src={src} 
                    height={85}
                    width={85}
                    mb="2rem"
                />
                :
                <Box height={5} width={5} bg="yellow.900" borderRadius="50%" mr="2"/>
            }
            <Text fontWeight="bold" fontSize={["md", "xl", "2xl"]}>{text}</Text>
        </Box>
    )
}