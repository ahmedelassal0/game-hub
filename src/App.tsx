import { Grid, GridItem, HStack } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre,
  platform: Platform,
  sortOrder: string,
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        md: '200px 1fr',
        lg: '200px 1fr',
      }}
      templateRows={{
        base: 'auto 1fr',
        md: 'auto 1fr',
        lg: 'auto 1fr',
      }}
      minHeight="100vh"
    >
      <GridItem area="nav" padding={4}>
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>

      <GridItem
        area="aside"
        paddingX={{ base: 0, md: 5, lg: 5 }}
        display={{ base: 'none', md: 'block' }}
      >
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>

      <GridItem area="main" p={{ base: 4, md: 6, lg: 8 }} spaceY='10'>
        <GameHeading gameQuery={gameQuery} />
        <HStack spaceX={5}>
          <PlatformSelector
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            selectedOrderMethod={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;