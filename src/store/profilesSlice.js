import { createSlice } from "@reduxjs/toolkit";

const profilesSlice = createSlice({
    name: 'profiles',
    initialState: {
        profiles: []
    },
    reducers: {
        addProfiles(state, action) {
            state.profiles = action.payload.profiles
        }
    },
})

export const {addProfiles} = profilesSlice.actions;

export default profilesSlice.reducer;

