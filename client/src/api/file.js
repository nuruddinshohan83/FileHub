import $api from "./$api"

export const getFileList = async () => {
  return $api.get("file").then((res) => res.data)
}
export const postFile = async (data) => {
  return $api.post("file", data).then((res) => res.data)
}
