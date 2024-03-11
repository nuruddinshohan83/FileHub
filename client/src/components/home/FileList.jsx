import React from "react"
import {
  Flex,
  Button,
  Box,
  Group,
  Text,
  ActionIcon,
  Image,
} from "@mantine/core"
import { IconPhoto } from "@tabler/icons-react"

export default function FileList({ fileData }) {
  return (
    <Flex gap={12}>
      {fileData.map((file) => (
        <Box
          mih="220px"
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
            border: "solid 1px" + theme.colors.gray[2],
            borderRadius: "8px",
          })}>
          <Group>
            <ActionIcon>
              <IconPhoto stroke={2} size="1.125rem" />
            </ActionIcon>
            <Text>{file.title}</Text>
            {console.log("http://localhost:3000" + file.location)}
            <Image
              maw={240}
              mx="auto"
              radius="md"
              src={"http://localhost:3000" + file.location}
              alt="Random image"
            />
          </Group>
        </Box>
      ))}
    </Flex>
  )
}
