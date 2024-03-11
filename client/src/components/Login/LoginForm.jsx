import React from "react"
import {
  Button,
  Checkbox,
  Flex,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { postLogin } from "../../api/user"
import { showLoginSuccess } from "../../utils/Toast"
import { useAuthContext } from "../../utils/contexts/AuthContextProvider"
import { useNavigate } from "react-router-dom"
import { cookieStore } from "../../utils/cookieParser"

export default function LoginForm() {
  const form = useForm({
    initialValues: {
      userName: "shohan",
      password: "12345",
    },
  })
  let { userData, setUserData } = useAuthContext()
  let navigate = useNavigate()
  //   console.log(form.values, "every render")
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values, "submit button clicked")
        postLogin({
          userName: values.userName,
          password: values.password,
        }).then((res) => {
          console.log(res.data.data)
          setUserData(res.data.data)
          showLoginSuccess()
          cookieStore("userInfo", res.data.data)
          navigate("/")
        })
      })}>
      <TextInput
        withAsterisk
        label="User Name"
        placeholder="Enter Your User Name"
        {...form.getInputProps("userName")}
      />
      <PasswordInput
        withAsterisk
        label="Password"
        placeholder="Enter Your Password"
        {...form.getInputProps("password")}
      />

      <Group position="right" mt="md">
        <Button
          type="submit"
          onClick={() => {
            console.log("test")
          }}>
          Submit
        </Button>
      </Group>
    </form>
  )
}
