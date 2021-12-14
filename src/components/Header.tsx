import { Grid, Image, Flex } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'


export function Header() {
    const router = useRouter()
    

    const notHome = router.asPath !== '/'

    return(
        <Grid
            templateColumns="repeat(3, 1fr)"
            p="8" 
            bg="white"
        >   
            <Flex
                justify="center"
                align="center"
            >
               {notHome && 
                    <ChevronLeftIcon 
                        fontSize="2rem"
                        cursor="pointer"
                        onClick={() => router.push('/')}
                    />
                }
            </Flex>

            <Flex
                justify="center"
                align="center"
            >
                <Image src="/logo.png" height={["1.8rem", "2.8rem"]}/>
            </Flex>
        </Grid>
    )
}