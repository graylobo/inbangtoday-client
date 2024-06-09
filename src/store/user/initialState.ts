import {
  UserSettingsState,
  initialSettingsState,
} from "@/store/user/slices/settings/initialState";

export type UserState = UserSettingsState;
export const initialState: UserState = {
  ...initialSettingsState,
};
