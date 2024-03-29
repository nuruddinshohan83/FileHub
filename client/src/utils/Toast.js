import { showNotification } from "@mantine/notifications"
export function showSelectAnOption() {
  showNotification({
    title: "Please select an option",
    message: "For proceeding to next step you have to select an option",
    color: "green",
    autoClose: true,
  })
}
export function showAddProductSuccess() {
  showNotification({
    title: "Product Added Successfully",
    message: "One product added on your product list ",
    color: "green",
    autoClose: true,
  })
}
export function showLoginSuccess() {
  showNotification({
    title: "Logged in sucessfully",
    message: "",
    color: "green",
    autoClose: true,
  })
}
export function showFileUploadSuccess() {
  showNotification({
    title: "File sucessfully",
    message: "",
    color: "green",
    autoClose: true,
  })
}
