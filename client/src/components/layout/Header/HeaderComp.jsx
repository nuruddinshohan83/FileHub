import {
  Burger,
  Header,
  MediaQuery,
  useMantineTheme,
  Avatar,
  Flex,
  Menu,
  Text,
  Group,
  ActionIcon,
} from "@mantine/core"
import { HiOutlineLogout } from "react-icons/hi"
import { HiOutlineMail } from "react-icons/hi"
import { HiOutlineUserCircle } from "react-icons/hi"
import { useAuthContext } from "../../../utils/contexts/AuthContextProvider"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import PagesSegments from "./PagesSegments"
import avatar from "./../../../assets/9440461.jpg"
import { IconBellRinging, IconTicket } from "@tabler/icons-react"
import { IconLogout } from "@tabler/icons-react"
import { Dispatch, SetStateAction } from "react"
export default function HeaderComp({ opened, setOpened }) {
  const theme = useMantineTheme()
  let { userData, setUserData } = useAuthContext()
  let navigate = useNavigate()

  return (
    <Header
      height={70}
      p="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        border: "none",
      })}>
      <Flex justify="space-between" align="center">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <PagesSegments />

        <Flex align="center" gap={16}>
          <ActionIcon>
            <IconBellRinging color={theme.colors.gray[6]} size="1.75rem" />
          </ActionIcon>
          <ActionIcon>
            <IconTicket color={theme.colors.gray[6]} size="1.75rem" />
          </ActionIcon>

          <Menu shadow="md" width={350}>
            <Menu.Target>
              <Avatar
                color="cyan"
                radius="200px"
                src={avatar}
                // size="45px"
              >
                Admin
              </Avatar>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<HiOutlineUserCircle size={18} />}>
                <Group>
                  <Text fw="bold">Name:</Text>
                  <Text>{userData?.userName}</Text>
                </Group>
              </Menu.Item>
              <Menu.Item icon={<HiOutlineMail size={18} />}>
                <Group>
                  <Text fw="bold">Email:</Text>
                  <Text>{userData?.email}</Text>
                </Group>
              </Menu.Item>
              <Menu.Item
                color="red"
                icon={<HiOutlineLogout size={18} />}
                onClick={() => {
                  console.log("logout")
                  setUserData(undefined)
                  Cookies.remove("userInfo")
                  navigate("/")
                }}>
                <Text fw="bold">Logout</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <ActionIcon>
            <IconLogout color={theme.colors.red[6]} size="1.75rem" />
          </ActionIcon>
        </Flex>
      </Flex>
    </Header>
  )
}
