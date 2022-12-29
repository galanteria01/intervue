import { createSlice } from "@reduxjs/toolkit"

const initialState = null

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    addSession: (state, action) => {
      state = action.payload
    },
    removeSession: (state) => {
      state = null
    }
  }
})

export const { addSession, removeSession } = sessionSlice.actions

export const selectSession = (state) => state;

export default sessionSlice.reducer