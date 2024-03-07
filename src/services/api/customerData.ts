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
