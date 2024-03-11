import { Flex, Image, Navbar } from "@mantine/core"
import NavLinkCustom from "./NavLinkCustom"
import clipinvoiceLogo from "./../../../../public/clipinvoice-logo.svg"
import {
  IconShoppingCart,
  IconUsers,
  IconFileDescription,
} from "@tabler/icons-react"

export default function NavbarComp({ opened }) {
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
          justify={"flex-start"}
          align={"flex-start"}
          // sx={{ border: "solid black 1px" }}
        >
          <Image maw={180} src={clipinvoiceLogo} alt="Random image" />
        </Flex>
        <NavLinkCustom
          label={"Product"}
          link={"/product"}
          Icon={<IconShoppingCart size="1.5rem" stroke={2} />}
          disabled={false}
        />
        <NavLinkCustom
          label={"Customer list"}
          link={"/customer"}
          Icon={<IconUsers size="1.3rem" stroke={2} />}
          disabled={false}
        />
        <NavLinkCustom
          label={"Invoice list"}
          link={"/invoice"}
          Icon={<IconFileDescription size="1.5rem" stroke={2} />}
          disabled={false}>
          <NavLinkCustom
            label={"Add invoice"}
            link={"/addinvoice"}
            Icon={<IconUsers size="1.3rem" stroke={2} />}
            disabled={false}
          />
        </NavLinkCustom>
      </Flex>
    </Navbar>
  )
}
