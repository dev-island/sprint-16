import { FC } from "react";
import { Box, Flex, Image, Button, useColorMode } from "@chakra-ui/react";
import PokemonLogo from "../../assets/pokemon-logo.svg";

export type Props = {
  goBack: () => void;
};

const Header: FC<Props> = ({
  goBack,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      as="nav"
      my={8}
      px={4}
    >
      <Box onClick={goBack}>
        <Image
          src={PokemonLogo}
          cursor="pointer"
          alt="logo"
          width="120px"
          height="50px"
        />
      </Box>
      <Button
        variant={"solid"}
        size={"xl "}
        width="175px"
        onClick={toggleColorMode}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
};

export default Header;
