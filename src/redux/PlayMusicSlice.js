import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTrack: null,
}

const PlaylistSlice = createSlice({
    name: 'playMusic',
    initialState,
    reducers: {
        AddMusic(state, action) {
            state.currentTrack = action.payload;
        },
        RemoveMusic(state) {
            state.currentTrack = null;
        },
    }
})
export const { AddMusic, RemoveMusic } = PlaylistSlice.actions

export default PlaylistSlice.reducer