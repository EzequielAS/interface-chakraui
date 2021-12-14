import { ContinentBanner } from "../../components/ContinentBanner"
import { Header } from "../../components/Header"
import { ContinentInfo } from "../../components/ContinentInfo"
import { CardCity } from "../../components/CardCity"
import { Box, Heading, Grid } from '@chakra-ui/react'

export default function Continent() {

    return(
        <Box>

            <Header />

            <ContinentBanner 
                title="Europa"
                image="/europe_page.png"
            />

            <ContinentInfo />

            <Heading 
                maxW="1160px" 
                marginX="auto" 
                marginBottom="2.5rem"
                w="95%"
                fontSize={["1.5rem", "2rem", "2rem", "2.25rem"]}
            >
                Cidades +100
            </Heading>

            <Grid  
                marginBottom="2.2rem"
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={["20px", "45px"]}
                px={["30px"]}
                maxW="1160px" 
                mx="auto"
                alignItems="center"
                justifyContent="center"
            >
                <CardCity />
                <CardCity />
                <CardCity />
                <CardCity />
                <CardCity />
            </Grid>

        </Box>
    )
}