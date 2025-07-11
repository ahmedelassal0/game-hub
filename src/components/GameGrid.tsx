import { Show, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <>
      <Show when={error}>
        <Text color='red'>{error}</Text>
      </Show>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} gap='10'>

        {isLoading && skeletons.map(skeletons => (
          <GameCardContainer key={skeletons}>
            <GameCardSkeleton />
          </GameCardContainer>
        )
        )}

        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        )
        )}

      </SimpleGrid>
    </>
  )
}

export default GameGrid