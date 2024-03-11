import { Flex, Image, Navbar, Text } from "@mantine/core"
import NavLinkCustom from "./NavLinkCustom"
import FileHub from "./../../../assets/FileHub.png"
import {
  IconShoppingCart,
  IconUsers,
  IconFileDescription,
} from "@tabler/icons-react"

export default function FileHubNavbar({ opened }) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      zIndex={100}
      ml={12}
      width={{ sm: 180, lg: 250 }}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        border: "none",
      })}>
      <Flex direction="column" sx={{ width: "100%", height: "100%" }} gap={6}>
        <Flex
          py={16}
          pl={12}
          mb={20}
          gap={12}
          justify={"flex-start"}
          align={"flex-start"}
          // sx={{ border: "solid black 1px" }}
        >
          <Image maw={25} src={FileHub} alt="Random image" />
          <Text> FileHub</Text>
        </Flex>
        <NavLinkCustom
          label={""}
          link={"/product"}
          Icon={<IconShoppingCart size="1.5rem" stroke={2} />}
          disabled={false}
        />
      </Flex>
    </Navbar>
  )
}
