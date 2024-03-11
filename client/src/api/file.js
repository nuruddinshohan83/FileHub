import $api from "./$api"

export const getFileList = async () => {
  return $api.get("file").then((res) => res.data)
}
