import { UserStore } from "@/store/user/store";

const currentThemeMode = (s: UserStore) => {
  const themeMode = s?.settings?.common?.themeMode;
  return themeMode || "auto";
};

export const userSettingsSelectors = {
  currentThemeMode,
};
