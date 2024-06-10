import { userSettingsSelectors } from "@/store/user/slices/settings/selectors";
import { useUserStore } from "@/store/user/store";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "antd-style";
import React, { ReactNode } from "react";
export interface AppThemeProps {
  children?: ReactNode;
}
function AppTheme({ children }: AppThemeProps) {
  const themeMode = useUserStore(userSettingsSelectors.currentThemeMode);
  return (
    <ThemeProvider themeMode={themeMode}>
      <ConfigProvider>{children}</ConfigProvider>
    </ThemeProvider>
  );
}

export default AppTheme;
