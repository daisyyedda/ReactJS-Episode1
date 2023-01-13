import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserStateValue {
  username: string;
}

interface UserState {
  value: UserStateValue;
}

const initialState = { value: { username: "" } } as UserState;

// createsSlice creates an object with three action creators and one reducer
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserStateValue>) => {
      state.value = action.payload;
    },

    logout: (state: UserState) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  // reducer is a function that takes the current state and an action as arguments, and returns a new state result.
  reducer: {
    user: userSlice.reducer,
  },
});
