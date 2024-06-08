import { Theme, css } from "antd-style";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ theme }: { theme: Theme }) => css`
  html,
  body,
  #__next {
    height: 100%;
    min-height: 100dvh;
    max-height: 100dvh;
  }
`;
