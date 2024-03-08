import { jwtDecode } from "jwt-decode";
import { INewCustomer } from "../../interfaces/ICustomer";
import { IToken } from "../../interfaces/IToken";
import { headersWithAuthorization, request } from "../../libs";
import Swal from "sweetalert2";

export async function fetchCustomerData() {
  try {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken !== null) {
      const response = await request.get(
        `/customer`,
        headersWithAuthorization({ accessToken } as IToken)
      );
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCustomerDistance() {
  try {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken !== null) {
      const response = await request.get(
        `/customer/distance`,
        headersWithAuthorization({ accessToken })
      );
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function createCustomer(data: INewCustomer) {
  try {
    const accessToken = localStorage.getItem("access_token")!;
    const userId = jwtDecode(accessToken);
    const customerData = {
      ...data,
      userId: userId.sub,
    };
    if (accessToken !== null) {
      const response = await request.post(
        `/customer`,
        customerData,
        headersWithAuthorization({ accessToken } as IToken)
      );
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
        title: "Cliente Criado com sucesso",
        text: "Cliente Criado com sucesso",
        icon: "success",
      });
      return response.data;
    }
  } catch (error) {
    console.log(error);
    const responseError = error as { response: { data: { error: string } } };
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
      text: responseError.response.data.error,
      icon: "error",
    });
  }
}
