import type { GameQuery } from "../App"
import { Heading } from "@chakra-ui/react"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    return (
        <Heading as='h1' fontSize={45}>
            {gameQuery.genre?.name}
            {gameQuery.platform?.name}
            {' '}
            Games
            {gameQuery.searchText ? `: ${gameQuery.searchText}` : ''}
        </Heading>
    )
}

export default GameHeading