import DashboardLayout from "../components/layout/DashboardLayout"
import { Box, Title } from "@mantine/core"
import { useGetFileList } from "../utils/CutomHook/queries"
import FileList from "../components/home/FileList"

export default function Dashboard() {
  let { data } = useGetFileList()
  console.log(data)
  return (
    <DashboardLayout>
      <Title order={3}>FileHub</Title>
      {data ? <FileList fileData={data.data} /> : null}
    </DashboardLayout>
  )
}
