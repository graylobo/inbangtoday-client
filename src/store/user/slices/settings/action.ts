import { difference } from "@/utils/difference";
import { merge } from "@/utils/merge";
import { theme } from "antd";
import { ThemeMode } from "antd-style";
import isEqual from "fast-deep-equal";
export interface UserSettingsAction {
  switchThemeMode: (themeMode: ThemeMode) => Promise<void>;
}

export const createUserSettingsAction = (set, get) => ({
  setSettings: async (settings) => {
    const { settings: prevSetting, defaultSettings } = get();

    const nextSettings = merge(prevSetting, settings);

    if (isEqual(prevSetting, nextSettings)) return;

    const diffs = difference(nextSettings, defaultSettings);
    set({ settings: diffs }, false, "optimistic_updateSettings");
  },

  setCommonConfig: async (common) => {
    await get().setSettings({ common });
  },
  switchThemeMode: async (themeMode: ThemeMode) => {
    await get().setCommonConfig({ themeMode });
  },
});
