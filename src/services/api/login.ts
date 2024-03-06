import Swal from "sweetalert2";
import { ILoginInput } from "../../interfaces/ILoginInput";
import { request } from "../../libs";

export async function login(data: ILoginInput) {
  try {
    const response = await request.post("/login", data);
    return response;
  } catch (error) {
    const responseError = error as { response: { data: { message: string } } };
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      title: "Error!",
      text: responseError.response.data.message,
      icon: "error",
    });
  }
}
