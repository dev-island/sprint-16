import { FC } from "react";
import { Card, Text, Image, Center } from "@chakra-ui/react";
export type Props = {
  name: string;
  id: number;
  viewPokemon: (id: number) => void;
};

const PokemonCard: FC<Props> = ({ name, id, viewPokemon }) => {
  return (
    <Card
      variant="elevated"
      rounded="md"
      cursor="pointer"
      width="200px"
      padding="10px"
      _hover={{
        boxShadow: "md",
      }}
      onClick={() => viewPokemon(id)}
    >
      <Text fontSize="sm" align="right">
        # {id}
      </Text>
      <Center>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
      </Center>
      <Text size="md">{name}</Text>
    </Card>
  );
};

export default PokemonCard;
