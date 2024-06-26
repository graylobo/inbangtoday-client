import { createDevtools } from "@/store/middleware/createDevtools";
import { UserState, initialState } from "@/store/user/initialState";
import {
  UserSettingsAction,
  createUserSettingsAction,
} from "@/store/user/slices/settings/action";
import { StateCreator, create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

export type UserStore = UserState & UserSettingsAction;

const createStore: StateCreator<UserStore> = (get, set) => ({
  ...initialState,
  ...createUserSettingsAction(get, set),
});

const devtools = createDevtools("user");

export const useUserStore = createWithEqualityFn<UserStore>()(
  subscribeWithSelector(devtools(createStore)),
  shallow
);
