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
import { IconPhoto, IconDotsVertical } from "@tabler/icons-react"

export default function FileList({ fileData }) {
  return (
    <Flex gap={12} wrap="wrap">
      {fileData.map((file) => (
        <Flex
          key={file._id}
          direction="column"
          p={12}
          w={220}
          gap={6}
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
            border: "solid 1px" + theme.colors.gray[2],
            borderRadius: "4px",
          })}>
          {console.log(file._id)}
          <Flex position="apart" justify="space-between" sx={(theme) => ({})}>
            <Flex position="left" align="center">
              <ActionIcon>
                <IconPhoto stroke={2} size="1.25rem" />
              </ActionIcon>
              <Text size={"md"}>
                {file.title.length > 10
                  ? file.title.slice(0, 10) + "..."
                  : file.title}
              </Text>
              {/* {console.log("http://localhost:3000" + file.location)} */}
            </Flex>
            <ActionIcon>
              <IconDotsVertical stroke={2} size="1.125rem" />
            </ActionIcon>
          </Flex>

          <Box
            w="100%"
            h={180}
            sx={(theme) => ({
              backgroundImage: `url(http://localhost:3000${file.location})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "4px",
            })}></Box>
        </Flex>
      ))}
    </Flex>
  )
}
