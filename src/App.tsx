import { Provider } from './components/ui/provider';
import { Button, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css'

function App() {

  return (
    <Provider>
      <Grid templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}>
        <GridItem area='nav' bg='coral'>Nav</GridItem>

        <GridItem display={{ base: 'none', lg: 'block' }} area='aside' bg='gold'>Aside</GridItem>

        <GridItem area='main' bg='dodgerblue'>Main</GridItem>
      </Grid>
    </Provider>
  )
}

export default App
