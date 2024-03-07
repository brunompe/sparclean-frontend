import { jwtDecode } from "jwt-decode";
import { INewCustomer } from "../../interfaces/ICustomer";
import { IToken } from "../../interfaces/IToken";
import { headersWithAuthorization, request } from "../../libs";

export async function fetchCustomerData() {
  try {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    if (accessToken !== null) {
      const tokenAsIToken: IToken = {
        accessToken,
      };
      console.log("tokenAsIToken", tokenAsIToken);
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
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
