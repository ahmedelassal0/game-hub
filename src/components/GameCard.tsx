import { Card, Image, HStack } from '@chakra-ui/react'
import type { Game } from '../hooks/useGames'
import PlatformsList from './PlatformsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
    return (
        <Card.Root>
            <Card.Body gap="2">
                <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
                <Card.Title mt="2">{game.name}</Card.Title>
                
                <HStack justifyContent='space-between' alignItems='flex-end'>
                    <PlatformsList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard