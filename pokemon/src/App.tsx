import { useState } from 'react';
import PokemonList from "./views/PokemonList";
import Header from "./components/Header";
import Pokemon from './views/Pokemon';
import { Box } from "@chakra-ui/react";

function App() {
  const [currentPokemonId, setCurrentPokemonId] = useState<number | null>(null);
  return (
    <Box>
      <Header goBack={() => setCurrentPokemonId(null)}/>
      {currentPokemonId ? (
        <Pokemon id={currentPokemonId} />
      ) : (
        <PokemonList
          viewPokemon={(id: number) => setCurrentPokemonId(id)}
        />
      )}

    </Box>
  );
}

export default App;
