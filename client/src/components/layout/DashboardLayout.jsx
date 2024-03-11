import { useState } from "react"
import { AppShell, useMantineTheme, Flex } from "@mantine/core"
import NavbarComp from "./Navbar/NavbarComp"
import HeaderComp from "./Header/HeaderComp"

export default function DashboardLayout({ children }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          width: "100%",
        },
      }}
      layout="alt"
      navbarOffsetBreakpoint="sm"
      padding="md"
      navbar={<NavbarComp opened={opened}></NavbarComp>}
      header={<HeaderComp opened={opened} setOpened={setOpened}></HeaderComp>}>
      <Flex
        direction="column"
        w="100%"
        h="100%"
        gap={12}
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: "20px",
          borderRadius: "16px",
          border: "solid 1px" + theme.colors.gray[3],
        })}>
        {children}
      </Flex>
    </AppShell>
  )
}
