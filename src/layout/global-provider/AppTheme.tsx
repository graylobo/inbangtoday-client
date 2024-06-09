import { ConfigProvider } from "antd";
import { ThemeProvider } from "antd-style";
import React, { ReactNode } from "react";
export interface AppThemeProps {
  children?: ReactNode;
}
function AppTheme({ children }: AppThemeProps) {
  return (
    <ThemeProvider>
      <ConfigProvider>{children}</ConfigProvider>
    </ThemeProvider>
  );
}

export default AppTheme;
