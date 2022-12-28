import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    addSession: (state, action) => {
      state = action.payload
    },
    removeSession: (state) => {
      state = {}
    }
  }
})

export const { addSession, removeSession } = sessionSlice.actions

export const selectSession = (state) => state.user;

export default sessionSlice.reducer