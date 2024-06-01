import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
  }

const PlaylistSlice = createSlice({
    name: 'dataBase',
    initialState,
    reducers: {
        AddPlaylist : (state, action) =>  {
            let copied = JSON.parse(JSON.stringify(state.value))
            copied.push(action.payload)
            state.value = copied
            // console.log( 15 , state.value);
        },
        RemovePlaylist : (state, action) =>  {
            let copied = JSON.parse(JSON.stringify(state.value))
            copied = copied.filter(el => {
                return el.id != action.payload
            })
            state.value = copied;
        }
    }
})
export const { AddPlaylist , RemovePlaylist } = PlaylistSlice.actions

export default PlaylistSlice.reducer