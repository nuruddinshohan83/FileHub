import { Flex, Text, useMantineTheme } from "@mantine/core"
import { useLocation } from "react-router-dom"
import { IconLayout2 } from "@tabler/icons-react"
export default function PagesSegments() {
    const location = useLocation()
    const theme = useMantineTheme()
    const segments = location.pathname.split("/")
    console.log(location.pathname)
    return (
        <Flex align="center" gap={4} c={theme.colors.gray[6]}>
            <IconLayout2 size="1.6rem" stroke={2} />
            {segments.map((val, index) => {
                if (val !== "") {
                    return (
                        <Text mx={3} fz="20px" fw={500} key={index}>
                            {`- ${val} `}
                        </Text>
                    )
                }
            })}
        </Flex>
    )
}

// <Text mx={3} key={index} style={{ fontFamily: "Abel" }}>
//     {val}
// </Text>
