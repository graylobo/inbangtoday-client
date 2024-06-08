import global from "./global";
import { createGlobalStyle } from "antd-style";

export const GlobalStyle = createGlobalStyle(({ theme }) => [
  global({ theme }),
]);
