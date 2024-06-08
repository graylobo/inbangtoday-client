import AppTheme from "@/layout/global-provider/AppTheme";
import StyleRegistry from "@/layout/global-provider/StyleRegistry";
import React, { PropsWithChildren } from "react";

function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <StyleRegistry>
      <AppTheme>{children}</AppTheme>
    </StyleRegistry>
  );
}

export default GlobalLayout;
