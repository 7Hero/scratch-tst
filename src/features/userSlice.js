import { createSlice } from '@reduxjs/toolkit'
const initialState = {
 user: {}
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
      state.user = JSON.parse(localStorage.logged)
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUser } = userSlice.actions

export default userSlice.reducer 