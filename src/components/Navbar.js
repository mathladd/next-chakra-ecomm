import Link from "next/link";
import NextLink from "next/link";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const { Box, Flex, Image } = require("@chakra-ui/react");

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("var(--colorLime3)", "var(--colorLime7)");
  const color = useColorModeValue("var(--colorLime9)", "var(--colorLime1)");
  const colorModeHover = useColorModeValue("var(--colorAmber9)", "var(--colorAmber1)")

  return (
    <nav>
      <Flex
        w="100%"
        flexDirection="row-wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexGrow="3">
          <Image
            src="logo.svg"
            alt="logo"
            w="50px"
            h="50px"
            bg="var(--colorAmber2)"
          ></Image>
        </Box>
        <Flex
          flexGrow="1"
          flexDirection="row-wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link>About</Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link>Login</Link>
          </NextLink>
          <Button
            bg={bg}
            color={color}
            _hover={{ color: colorModeHover }}
            onClick={toggleColorMode}
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
