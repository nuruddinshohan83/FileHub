import {
  Button,
  FileButton,
  Flex,
  Group,
  Image,
  Navbar,
  Text,
} from "@mantine/core"
import NavLinkCustom from "./NavLinkCustom"
import FileHub from "./../../../assets/FileHub.png"
import { Dropzone } from "@mantine/dropzone"
import {
  IconShoppingCart,
  IconUsers,
  IconFileDescription,
} from "@tabler/icons-react"
import FileHubNavbar from "./FileHubNavbar"
import { IconUpload } from "@tabler/icons-react"
import { useForm } from "@mantine/form"
import { postFile } from "../../../api/file"
import axios from "axios"
import { useAuthContext } from "../../../utils/contexts/AuthContextProvider"
import { useQueryClient } from "@tanstack/react-query"
import { showFileUploadSuccess } from "../../../utils/Toast"
export default function NavbarComp({ opened }) {
  let { userData } = useAuthContext()
  const client = useQueryClient()
  let fileForm = useForm({
    initialValues: {
      file: null,
    },
  })
  if (fileForm.values.file) {
    console.log("file found")
    let formData = new FormData()
    formData.append("file", fileForm.values.file)
    console.log(formData.get("file"))
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/file`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: userData.token,
        },
      })
      .then((res) => {
        console.log(res)
        fileForm.setFieldValue("file", null)
        showFileUploadSuccess()
        client.invalidateQueries(["fileList"])
      })
  }
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
        <Group position="center">
          <FileButton
            accept="image/png,image/jpeg"
            {...fileForm.getInputProps("file")}>
            {(props) => (
              <Button
                w={200}
                leftIcon={<IconUpload size={"1.2rem"} />}
                variant="light"
                color="teal"
                {...props}>
                Upload
              </Button>
            )}
          </FileButton>
        </Group>
      </Flex>
    </Navbar>
  )
}
