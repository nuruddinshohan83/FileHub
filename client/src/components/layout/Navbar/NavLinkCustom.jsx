import { Box, NavLink, Navbar, Text, useMantineTheme } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"
import { IconChevronRight } from "@tabler/icons-react"
export default function NavLinkCustom({
  label,
  link,
  Icon,
  disabled,
  children,
}) {
  let navigate = useNavigate()
  let location = useLocation().pathname
  let theme = useMantineTheme()
  // let lastSegment = location.pathname.substring(
  //     location.pathname.lastIndexOf("/") + 1
  // )
  let bgColor = location === link ? theme.white : theme.colors.gray[2]
  return (
    <Navbar.Section>
      <NavLink
        pl={18}
        c={theme.colors.gray[6]}
        label={
          <Text fw={600} fz="15px" py={"2px"}>
            {label}
          </Text>
        }
        icon={Icon}
        sx={(theme) => ({
          borderRadius: "7px",
        })}
        active={location === link ? true : false}
        variant="filled"
        color="base.10"
        onClick={() => {
          if (!disabled) {
            navigate(link)
          }
        }}
        defaultOpened
        rightSection={
          children ? <IconChevronRight size="1.3rem" stroke={2.5} /> : null
        }>
        {children}
      </NavLink>
    </Navbar.Section>
  )
}

/*
<Box
     style={{
         backgroundColor: bgColor,
         padding: "4px 6px",
     }}
>
     {Icon}
</Box>
*/
