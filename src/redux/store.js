import { configureStore } from "@reduxjs/toolkit";
import PlaylistsSlice from "./PlaylistsSlice";
import PlayMusicSlice from "./PlayMusicSlice";

export const store = configureStore({
    reducer: {
        dataBase: PlaylistsSlice,
        playMusic: PlayMusicSlice
    },
})