import Cookies from "js-cookie";

export const saveCookie = (name, data) => {
  return Cookies.set(name, data);
};
export const getCookie = (name) => {
  return Cookies.get(name);
};
export const deleteCookie = (name) => {
  return Cookies.remove(name);
};
