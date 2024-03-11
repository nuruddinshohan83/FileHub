import { Button, Checkbox, Flex, Group, TextInput } from "@mantine/core"
import LoginForm from "../components/Login/LoginForm"

export default function Register() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        width: "100%",
        height: "100%",
      })}>
      <LoginForm />
    </Flex>
  )
}
