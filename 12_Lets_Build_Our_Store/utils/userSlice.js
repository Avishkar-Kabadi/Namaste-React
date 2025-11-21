// utils/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") || "",
    isLoggedIn: !!localStorage.getItem("user"),
    token: localStorage.getItem("token") || "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            const { User, Access } = action.payload;
            state.user = User;
            state.token = Access;
            state.isLoggedIn = true;

            localStorage.setItem("user", User);
            localStorage.setItem("token", Access);

        },
        logout: (state) => {
            state.user = "";
            state.isLoggedIn = false;
            state.token = "";
            localStorage.removeItem("user",);
            localStorage.removeItem("token");

        },
    },
});

export const { logout, register } = userSlice.actions;
export default userSlice.reducer;
