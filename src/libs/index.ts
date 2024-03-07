import axios from "axios";
import { IToken } from "../interfaces/IToken";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const headersWithAuthorization = ({ accessToken }: IToken) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export { request, headersWithAuthorization };
