"use client";
import { GlobalStyle } from "@/styles";
import { ReactNode } from "react";
import "antd/dist/reset.css";
export interface AppThemeProps {
  children?: ReactNode;
}
function AppTheme({ children }: AppThemeProps) {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
}

export default AppTheme;
