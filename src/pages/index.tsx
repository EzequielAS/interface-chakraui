import { Header } from '../components/Header'
import { Activities } from '../components/Activities'
import { Banner } from '../components/Banner';
import { Slider } from '../components/Slider';
import { Box, Heading } from '@chakra-ui/react'


export default function Home() {

  return (
    <Box
      w="100%"
      mx="auto"
    >

      <Header />

      <Banner />

      <Activities />

      <Box h="2px" w={["60px", "90px"]} bg="gray.600" mx="auto" my={["9", "20"]}/>

      <Heading 
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
        mx="auto"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Slider />

    </Box>
  )
}
