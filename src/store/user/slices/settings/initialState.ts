import { DEFAULT_SETTINGS } from "@/const/settings";
import { UserSettings } from "@/types/user/settings";
import { DeepPartial } from "utility-types";

export interface UserSettingsState {
  defaultSettings: UserSettings;
  settings: DeepPartial<UserSettings>;
}

export const initialSettingsState: UserSettingsState = {
  defaultSettings: DEFAULT_SETTINGS,
  settings: {},
};
