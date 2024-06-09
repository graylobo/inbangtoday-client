"use client";

import AppTheme from "@/layout/global-provider/AppTheme";
import Dashboard from "@/layout/global-provider/DashBoard";
import StyleRegistry from "@/layout/global-provider/StyleRegistry";
import { GlobalStyle } from "@/styles";
import "antd/dist/reset.css";
import { PropsWithChildren } from "react";
function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <StyleRegistry>
      <GlobalStyle />
      <AppTheme>
        <Dashboard>{children}</Dashboard>
      </AppTheme>
    </StyleRegistry>
  );
}

export default GlobalLayout;
