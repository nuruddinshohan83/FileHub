import { useQuery } from "@tanstack/react-query"

import { getFileList } from "../../api/file"

export function useGetFileList() {
  return useQuery({
    queryKey: ["fileList"],
    queryFn: () => getFileList(),
    enabled: true,
    cacheTime: 60 * 1000 * 60 * 0,
    staleTime: 60 * 1000 * 60 * 0,
  })
}
