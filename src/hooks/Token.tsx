import { useCookies } from "react-cookie";
export default function Token() {
  const [cookies, setCookie] = useCookies(["token"]);
  const setToken = (token: string) => {
    return setCookie("token", token);
  };
  const getToken = () => {
    return cookies.token;
  };
  return { setToken, getToken };
}
