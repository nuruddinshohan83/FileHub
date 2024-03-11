import { useRoutes } from "react-router-dom"
import allRoutes from "./routes"
import { Box } from "@mantine/core"
import { useAuthContext } from "./utils/contexts/AuthContextProvider"
function App() {
  let { userData } = useAuthContext()
  const page = useRoutes(allRoutes(userData))
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}>
      {page}
    </Box>
  )
}

export default App
