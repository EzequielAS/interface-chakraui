import { Activity } from "./Activity"
import { Grid, GridItem } from '@chakra-ui/react'

export function Activities() {
    return(
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            justifyContent="space-between"
            align="center"
            mx="auto"
            maxW="1160px"
            gap={6}
        >
            <GridItem>
                <Activity src="./cocktail.png" text="vida noturna"/>
            </GridItem>

            <GridItem>
                <Activity src="./surf.png" text="praia"/>
            </GridItem>

            <GridItem>
                <Activity src="./building.png" text="moderno"/>
            </GridItem>

            <GridItem>
                <Activity src="./museum.png" text="clássico"/>
            </GridItem>

            <GridItem colSpan={[2, 2, 2, 1]}>
                <Activity src="./earth.png" text="e mais..."/>
            </GridItem>
        </Grid>
    )
}