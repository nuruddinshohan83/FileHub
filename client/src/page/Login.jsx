import { Flex } from "@mantine/core"

export default function Login() {
  return (
    <Flex
      justify="center"
      align="center"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        width: "100%",
        height: "100%",
      })}>
      LogIn page
    </Flex>
  )
}
