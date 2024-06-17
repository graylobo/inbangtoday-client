import { css } from "antd-style";

enum Breakpoints {
  Desktop = 1024,
}

export const media = {
  desktop: (...args: any) => css`
    @media (min-width: ${Breakpoints.Desktop}px) {
      ${css(args)}
    }
  `,
};
